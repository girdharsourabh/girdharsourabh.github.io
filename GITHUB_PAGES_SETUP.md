# Setting Up Your Portfolio on GitHub Pages

Follow these step-by-step instructions to get your portfolio website deployed on GitHub Pages.

## Step 1: Prepare Your Repository

1. Go to your GitHub repository: `https://github.com/girdharsourabh/MyWebsite`
2. If it already contains code, consider backing it up or creating a new branch
3. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/girdharsourabh/MyWebsite.git
   cd MyWebsite
   ```

## Step 2: Create React Project for GitHub Pages

1. Initialize a new React project using Vite:
   ```bash
   npm create vite@latest . --template react-ts
   ```
   This will set up a basic React + TypeScript project in your current directory.

2. Install the dependencies:
   ```bash
   npm install
   ```

## Step 3: Add Required Dependencies

Install all the required packages for your portfolio:

```bash
npm install @hookform/resolvers @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip @tanstack/react-query class-variance-authority clsx cmdk date-fns embla-carousel-react framer-motion input-otp lucide-react react-day-picker react-hook-form react-icons react-resizable-panels recharts tailwind-merge tailwindcss-animate vaul zod zod-validation-error

npm install -D @tailwindcss/typography autoprefixer postcss tailwindcss
```

## Step 4: Set Up Tailwind CSS

Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

Update the `tailwind.config.js` file with the content from your Replit project's version.

## Step 5: Organize Your Project Structure

Create the following directory structure:

```
MyWebsite/
├── public/
├── src/
│   ├── components/
│   │   └── ui/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## Step 6: Copy Files from Replit Project

1. Transfer all component files from your Replit project to the appropriate folders in your GitHub project.

2. Pay special attention to these critical files:
   - All UI components in `src/components/ui/`
   - All section components (Experience, Skills, Education, Projects, Talks)
   - Data files in `src/lib/data.ts`
   - Page components in `src/pages/`
   - Main App component and entry point files

## Step 7: Set Up GitHub Pages Configuration

1. Update the `vite.config.ts` file to include GitHub Pages base path:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/MyWebsite/', // This is critical for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

2. Create `.github/workflows/deploy.yml` with the GitHub Actions workflow:

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

## Step 8: Commit and Push to GitHub

```bash
git add .
git commit -m "Set up portfolio website with GitHub Pages deployment"
git push origin main
```

## Step 9: Configure GitHub Repository for Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions"
4. Wait for the GitHub Action to complete
5. Your site will be available at: `https://girdharsourabh.github.io/MyWebsite/`

## Troubleshooting

- If you see a blank page, check the browser console for path errors
- Ensure all asset paths are correct with the `/MyWebsite/` base path
- Check GitHub Actions logs for any build errors