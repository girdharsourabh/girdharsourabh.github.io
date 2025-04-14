# GitHub Pages Deployment Instructions

This document provides instructions for deploying this portfolio website to GitHub Pages.

## Step 1: Code Preparation

Before pushing to GitHub, make the following changes for GitHub Pages compatibility:

1. In your repository on GitHub, make sure to create a new Vite project with:
   ```bash
   npm create vite@latest MyWebsite -- --template react-ts
   ```

2. Replace the content inside the new project with the code from this Replit project.

3. Modify `vite.config.ts` to add GitHub Pages base path:
   ```typescript
   // Add this to your vite.config.ts
   base: '/MyWebsite/',
   ```

## Step 2: GitHub Repository Setup

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial portfolio website commit"
   git push origin main
   ```

2. In your GitHub repository, go to:
   - Settings → Pages
   - Set "Source" to "GitHub Actions"

## Step 3: GitHub Actions Workflow

Create `.github/workflows/deploy.yml` with the following content:

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
        # This will create a 'dist' folder with the built application

      - name: Deploy to GitHub Pages 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages  # The branch the action should deploy to
          folder: dist      # The folder the action should deploy
          clean: true       # Automatically remove deleted files from the deployment
```

## Step 4: Additional Configurations

1. For client-side routing support (if using React Router), create a `public/404.html` file that redirects to your `index.html`.

2. Update any hardcoded paths in your application to use relative URLs that will work with the base path.

3. Ensure all image paths and asset references use the correct base path.

## Step 5: Deployment

1. Push all changes to GitHub:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment setup"
   git push origin main
   ```

2. GitHub Actions will automatically deploy your site to GitHub Pages.

3. Your site will be available at: `https://girdharsourabh.github.io/MyWebsite/`

## Troubleshooting

- If you see a blank page, check browser console for path errors
- Check the GitHub Actions logs for build errors
- Make sure all imports use the correct base path