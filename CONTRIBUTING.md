# Contributing to Simpllified AI Website

Thank you for your interest in contributing to the Simpllified AI website! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Component Guidelines](#component-guidelines)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the project
- Show empathy towards other contributors

## Getting Started

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/Simpllified AI.git
   cd Simpllified AI
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## Development Workflow

### 1. Make Changes
- Edit files in your local environment
- Test changes in the browser
- Ensure responsive design works

### 2. Test Your Changes
```bash
# Run linting
npm run lint

# Build the project
npm run build

# Test the production build
npm start
```

### 3. Commit Your Changes
```bash
git add .
git commit -m "feat: add new feature"
```

### 4. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 5. Create Pull Request
- Go to the original repository
- Click "New Pull Request"
- Select your branch
- Fill in the PR template

## Component Guidelines

### File Structure
```
components/
├── YourComponent.tsx    # Component file
└── index.ts            # Export file (update this)
```

### Component Template
```typescript
'use client'

import { motion } from 'framer-motion'
import { Icon } from 'lucide-react'

const YourComponent = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        {/* Your content */}
      </div>
    </section>
  )
}

export default YourComponent
```

### Best Practices

1. **Use TypeScript**: Always type your props and state
2. **Responsive Design**: Test on mobile, tablet, and desktop
3. **Accessibility**: Include ARIA labels and keyboard navigation
4. **Performance**: Optimize animations and images
5. **Consistency**: Follow existing patterns and styles

### Animation Guidelines

Use Framer Motion for animations:

```typescript
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>

// Hover effects
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {/* Button content */}
</motion.button>
```

## Style Guidelines

### Tailwind CSS

Use Tailwind utility classes:

```typescript
// Good ✅
<div className="glass p-8 rounded-2xl border border-gray-800">

// Avoid ❌
<div style={{ padding: '2rem', borderRadius: '1rem' }}>
```

### Custom Styles

Add custom styles to `globals.css`:

```css
/* Good ✅ */
.custom-utility {
  /* styles */
}

/* Avoid inline styles unless necessary ❌ */
```

### Color Usage

Use theme colors from Tailwind config:

```typescript
// Good ✅
className="text-electric-blue bg-gradient-electric"

// Avoid ❌
style={{ color: '#00D4FF' }}
```

### Spacing

Follow consistent spacing:

```typescript
// Section padding
className="py-24"

// Container spacing
className="container mx-auto px-6"

// Component gaps
className="space-y-6" or className="gap-6"
```

## Commit Messages

Follow the Conventional Commits specification:

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(hero): add animated gradient background
fix(navbar): resolve mobile menu scroll issue
docs(readme): update installation instructions
style(benefits): improve card hover animations
refactor(components): simplify prop types
perf(particles): optimize canvas rendering
```

## Pull Request Process

### 1. Before Submitting
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] No linting errors
- [ ] Responsive design works
- [ ] Accessibility tested
- [ ] Documentation updated (if needed)

### 2. PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Commented complex code
- [ ] Documentation updated
- [ ] No new warnings
```

### 3. Review Process
- Maintainers will review your PR
- Address any feedback or requested changes
- Once approved, your PR will be merged

## Project Structure

```
Simpllified AI-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   └── ...
├── public/               # Static assets
│   └── ...
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Code Review Criteria

### ✅ What We Look For
- Clean, readable code
- Proper TypeScript typing
- Responsive design
- Accessibility compliance
- Performance optimization
- Consistent styling
- Good documentation

### ❌ Common Issues
- Missing TypeScript types
- Inline styles instead of Tailwind
- Not tested on mobile
- Missing accessibility attributes
- Performance issues
- Inconsistent naming

## Questions?

If you have questions or need help:

1. Check existing documentation (README.md, SETUP.md, FEATURES.md)
2. Search existing issues on GitHub
3. Create a new issue with the "question" label
4. Email: contact@Simpllified AI.com

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Simpllified AI! 🚀




