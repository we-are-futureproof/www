# Environment Setup Guide

## Development Environment

### System Requirements

- **Node.js**: v18.0.0 or higher
- **Package Manager**: pnpm (v8.0.0 or higher)
- **Git**: For version control

### Installation Steps

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Install pnpm**
   ```bash
   npm install -g pnpm
   pnpm --version  # Verify installation
   ```

3. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd www
   ```

4. **Install Dependencies**
   ```bash
   pnpm install
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```
   Access the site at http://localhost:3000

## Environment Variables

The project uses environment variables for configuration. Create a `.env.local` file in the project root with the following variables:

```
# Base URL for development
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Add additional environment variables as needed
```

## Editor Setup

### Recommended: VS Code

#### Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Hero
- Better Comments

#### Recommended VS Code Settings

It's recommended to create a `.vscode/settings.json` file with the following configuration for an optimal development experience:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },

}
```

*Note: This project currently does not have a .vscode directory with pre-configured settings. These are recommended settings that you can add to your personal VS Code configuration.*

## Build and Production

### Building for Production

```bash
pnpm build
```

### Starting Production Server

```bash
pnpm start
```

### Vercel Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure the build settings
3. Set up the required environment variables in the Vercel dashboard
4. Deploy

## Troubleshooting Common Issues

### Node Version Issues
If you encounter errors related to Node.js versions, ensure you're using the correct version with nvm:

```bash
nvm use 18  # Or the version specified in .nvmrc
```

### Package Installation Problems
If dependencies aren't installing correctly:

```bash
rm -rf node_modules
pnpm store prune
pnpm install
```

### Build Errors
For build errors, check:
1. TypeScript errors (run `pnpm typescript:check`)
2. ESLint errors (run `pnpm lint`)
3. Ensure all dependencies are correctly installed
