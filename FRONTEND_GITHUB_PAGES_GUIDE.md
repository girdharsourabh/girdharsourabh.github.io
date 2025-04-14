# Frontend-Only GitHub Pages Setup Guide

This guide will help you set up a frontend-only version of your portfolio website for GitHub Pages deployment. Since GitHub Pages only hosts static content, we'll modify the project to work without a backend.

## Step 1: Create a New React Project

```bash
# Create a new project
npx create-vite@latest portfolio --template react-ts
cd portfolio

# Install dependencies
npm install
```

## Step 2: Install Required Dependencies

```bash
# Install UI components and utilities
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
  
# Install other dependencies
npm install @hookform/resolvers class-variance-authority clsx cmdk date-fns embla-carousel-react framer-motion input-otp lucide-react react-day-picker react-hook-form react-icons react-resizable-panels recharts tailwind-merge tailwindcss-animate vaul zod zod-validation-error

# Install dev dependencies
npm install -D @tailwindcss/typography autoprefixer postcss tailwindcss
```

## Step 3: Set Up Tailwind CSS

```bash
# Initialize Tailwind CSS
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
```

## Step 4: Create Folder Structure

```bash
mkdir -p src/components/ui src/hooks src/lib src/pages
```

## Step 5: Set Up Base Files

1. Create `src/index.css` with all your styles
2. Update `src/main.tsx` to match your entry point 
3. Add all UI components to `src/components/ui/`
4. Add all page components to `src/pages/`

## Step 6: Add Data File

Create `src/lib/data.ts` using the content from `github-pages-data.ts`. This includes all your profile information, experiences, skills, education, projects, and talks in a static format.

## Step 7: Update App Component for Static Data

Create `src/App.tsx` with a version that uses the static data:

```typescript
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import NotFound from './pages/not-found';
import { getProfileData, getExperiencesData, getSkillsData, getEducationData, getProjectsData, getTalksData } from './lib/data';

export default function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Load static data
  const profile = getProfileData();
  const experiences = getExperiencesData();
  const skills = getSkillsData();
  const education = getEducationData();
  const projects = getProjectsData();
  const talks = getTalksData();
  const isLoading = false;

  // Simple router
  switch (route) {
    case '/':
    case '/MyWebsite/':
      return (
        <Home
          profile={profile}
          experiences={experiences}
          skills={skills}
          education={education}
          projects={projects}
          talks={talks}
          isLoading={isLoading}
        />
      );
    default:
      return <NotFound />;
  }
}
```

## Step 8: Configure Vite for GitHub Pages

Create a `vite.config.ts` file:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/MyWebsite/', // Base path for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## Step 9: Set Up GitHub Actions for Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Project
        run: npm run build

      - name: Deploy to GitHub Pages 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
          clean: true
```

## Step 10: Push to GitHub

```bash
git add .
git commit -m "Set up frontend portfolio for GitHub Pages"
git push origin main
```

## Step 11: Configure GitHub Pages

1. Go to your repository settings
2. Navigate to Pages
3. Select GitHub Actions as your source
4. Wait for the deployment to complete

Your site will be available at: `https://girdharsourabh.github.io/MyWebsite/`