# Simpllified AI Website - Deployment Guide

## ðŸš€ Deployment Options

This guide covers deploying your Simpllified AI website to various hosting platforms.

---

## 1. Vercel (Recommended)

Vercel is the easiest option as it's built by the creators of Next.js.

### Option A: Deploy via Git

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/Simpllified AI.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Configure (Optional):**
   - Add environment variables
   - Configure custom domain
   - Set up automatic deployments

### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables
Add these in Vercel dashboard under Settings â†’ Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@Simpllified AI.com
```

---

## 2. Netlify

### Step-by-Step

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Install Netlify Plugin:**
   Create `netlify.toml`:
   ```toml
   [build]
   command = "npm run build"
   publish = ".next"

   [[plugins]]
   package = "@netlify/plugin-nextjs"

   [build.environment]
   NODE_VERSION = "18"
   ```

3. **Deploy:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Build
   npm run build

   # Deploy
   netlify deploy --prod
   ```

---

## 3. AWS Amplify

### Deploy via Console

1. **Connect Repository:**
   - Go to AWS Amplify Console
   - Click "New app" â†’ "Host web app"
   - Connect your Git repository

2. **Build Settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Deploy:**
   - Save and deploy
   - AWS will handle SSL and CDN automatically

---

## 4. Digital Ocean App Platform

### Deploy Steps

1. **Create App:**
   - Go to App Platform dashboard
   - Click "Create App"
   - Connect your repository

2. **Configure:**
   - Build command: `npm run build`
   - Run command: `npm start`
   - Environment: Node.js 18

3. **Deploy:**
   - Click "Deploy"
   - DO will provision resources and deploy

---

## 5. Self-Hosted (VPS/Dedicated Server)

### Requirements
- Ubuntu 20.04+ or similar Linux distribution
- Node.js 18+
- PM2 for process management
- Nginx for reverse proxy

### Setup Steps

1. **Install Dependencies:**
   ```bash
   # Install Node.js 18
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   sudo npm install -g pm2

   # Install Nginx
   sudo apt install nginx
   ```

2. **Clone and Build:**
   ```bash
   git clone https://github.com/yourusername/Simpllified AI.git
   cd Simpllified AI
   npm install
   npm run build
   ```

3. **Start with PM2:**
   ```bash
   pm2 start npm --name "Simpllified AI" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx:**
   Create `/etc/nginx/sites-available/Simpllified AI`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable Site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/Simpllified AI /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Setup SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## 6. Docker Deployment

### Dockerfile

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### Docker Compose

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

### Deploy:
```bash
docker-compose up -d
```

---

## Pre-Deployment Checklist

### âœ… Code Quality
- [ ] Run `npm run build` successfully
- [ ] Run `npm run lint` with no errors
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify all links work

### âœ… Content
- [ ] Replace placeholder logos
- [ ] Update contact information
- [ ] Verify all text content
- [ ] Check testimonials are accurate
- [ ] Update social media links

### âœ… Performance
- [ ] Optimize images (WebP format)
- [ ] Enable compression
- [ ] Set up CDN (if applicable)
- [ ] Configure caching headers
- [ ] Test with Lighthouse

### âœ… SEO
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Configure meta tags
- [ ] Set up Google Analytics
- [ ] Verify Open Graph tags

### âœ… Security
- [ ] Enable HTTPS/SSL
- [ ] Set security headers
- [ ] Update dependencies
- [ ] Remove console.logs
- [ ] Sanitize user inputs

---

## Post-Deployment

### 1. Monitor Performance
- Set up monitoring (Vercel Analytics, Google Analytics)
- Monitor error logs
- Check Core Web Vitals

### 2. Set Up CI/CD
- Automatic deployments on git push
- Run tests before deployment
- Deploy to staging before production

### 3. Backup Strategy
- Regular database backups (if applicable)
- Code repository backups
- Configuration backups

### 4. Domain Configuration
- Point domain to hosting platform
- Configure DNS records
- Set up SSL certificate
- Configure redirects (www â†’ non-www or vice versa)

### 5. Analytics & Monitoring
- Google Analytics
- Google Search Console
- Vercel Analytics (if using Vercel)
- Error tracking (Sentry, LogRocket)

---

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Change port
PORT=3001 npm start
```

### Memory Issues
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Image Optimization Errors
Make sure you have sharp installed:
```bash
npm install sharp
```

---

## Support & Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)

---

Ready to go live! ðŸš€


