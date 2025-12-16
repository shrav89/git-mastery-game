# 🚀 Quick Setup Guide: Git Mastery Game

## Step 1: Download & Extract

Download the `git-mastery-game.zip` file and extract it.

## Step 2: Create GitHub Repository

### Option A: GitHub Web Interface
1. Go to [github.com/new](https://github.com/new)
2. Name it `git-mastery-game`
3. Make it Public or Private
4. **Don't** initialize with README (we have one)
5. Click "Create repository"

### Option B: GitHub CLI
```bash
gh repo create git-mastery-game --public --source=. --remote=origin
```

## Step 3: Initialize & Push

```bash
# Navigate to the project folder
cd git-mastery-game

# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "feat: initial project setup"

# Add your GitHub repo as remote (replace with your URL)
git remote add origin https://github.com/YOUR-ORG/git-mastery-game.git

# Push to GitHub
git push -u origin main
```

## Step 4: Install & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser 🎉

## Step 5: Invite Your Team

1. Go to your repo → Settings → Collaborators
2. Add team members
3. Share the repo URL

## Step 6: Set Up Branch Protection (Recommended)

1. Go to Settings → Branches
2. Add rule for `main`
3. Enable:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date

## Using Claude Code

### Install Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```

### Run in Project
```bash
cd git-mastery-game
claude
```

### Example Commands to Try
```
> Add a new mission about git stash to chapter 2
> Create a progress persistence feature using localStorage
> Improve the mobile layout
> Add sound effects for correct/incorrect answers
```

## Project Structure Overview

```
git-mastery-game/
├── src/
│   ├── App.jsx          # Main game (all logic here)
│   ├── main.jsx         # Entry point
│   └── index.css        # Styles
├── CLAUDE.md            # AI development instructions
├── CONTRIBUTING.md      # Team guidelines
├── README.md            # Project documentation
└── package.json         # Dependencies
```

## Quick Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Check for errors |
| `npm run format` | Format code |

## Deployment Options

### Vercel (Recommended)
1. Connect GitHub repo to [vercel.com](https://vercel.com)
2. It auto-deploys on every push

### Netlify
1. Connect repo at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Run `npm run build`
2. Push `dist/` to `gh-pages` branch
3. Enable Pages in repo settings

---

## Need Help?

- Check `CLAUDE.md` for AI development tips
- Read `CONTRIBUTING.md` for team guidelines
- Open an issue on GitHub

Happy coding! 🎮
