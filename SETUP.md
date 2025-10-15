# Simpllified AI Website Setup Guide

## Quick Start

Follow these steps to get your Simpllified AI website up and running:

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Framer Motion
- Tailwind CSS
- Lucide React (icons)
- TypeScript

### 2. Add Your Logos

Create or add your logo files to the `public/` directory:
- `public/nav-logo.png` - Logo for the navigation bar (recommended size: 40x40px)
- `public/footer-logo.png` - Logo for the footer (recommended size: 40x40px)

If you don't have logos yet, the site will display placeholder text ("DF").

### 3. Run Development Server

```bash
npm run dev
```

This will start the development server with Turbopack at [http://localhost:3000](http://localhost:3000)

### 4. Customize Content

Edit the component files in the `components/` directory to customize:
- Text and headings
- Descriptions
- Testimonials
- Contact information
- Company details

### 5. Customize Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  'electric-blue': '#00D4FF',    // Change to your primary color
  'neon-cyan': '#00FFF0',        // Change to your secondary color
  'neon-purple': '#B026FF',      // Change to your accent color
}
```

### 6. Build for Production

When you're ready to deploy:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Advanced Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@yourdomain.com
```

### Custom Fonts

The project uses Google Fonts (Inter, Sora, Poppins). To change fonts:

1. Edit `app/globals.css` - Update the Google Fonts import URL
2. Edit `tailwind.config.ts` - Update the font family configuration

### Adding New Pages

Create new page files in the `app/` directory:

```
app/
â”œâ”€â”€ about/
â”‚   â””â”€â”€ page.tsx
â”œâ”€â”€ pricing/
â”‚   â””â”€â”€ page.tsx
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Vercel will automatically detect Next.js and configure everything

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Enable "Next.js Runtime"

### Deploy to Other Platforms

Ensure your hosting platform supports:
- Node.js 18+
- Next.js 14
- Server-side rendering (SSR)

## Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### TypeScript Errors

Check for TypeScript errors:

```bash
npm run lint
```

### Port Already in Use

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

## Performance Optimization

- Images: Use WebP format for better compression
- Lazy Loading: Images are automatically lazy-loaded
- Code Splitting: Next.js handles this automatically
- Caching: Configure caching headers in production

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android 90+

## Need Help?

- Email: contact@Simpllified AI.com
- Documentation: [Next.js Docs](https://nextjs.org/docs)
- Framer Motion: [Framer Motion Docs](https://www.framer.com/motion/)
- Tailwind CSS: [Tailwind Docs](https://tailwindcss.com/docs)

---

Happy Building! ðŸš€


