# 🎮 Git Mastery: The Full-Stack Designer's Journey

An interactive game to master Git — from basics to enterprise-grade workflows. Built specifically for designers transitioning to full-stack roles.

![Git Mastery Banner](docs/banner.png)

## ✨ Features

- **8 Chapters, 48+ Missions** covering everything from `git init` to advanced CI/CD
- **3 Challenge Types**: Terminal commands, quizzes, and real-world scenarios
- **Adaptive Difficulty**: Progress unlocks based on your performance
- **Designer-Focused Storyline**: You're a Senior Product Designer at an AI startup
- **Git Sandbox**: Practice any command in a safe environment
- **XP & Progress Tracking**: Earn points and unlock achievements

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/) (of course! 😄)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/git-mastery-game.git

# Navigate to project directory
cd git-mastery-game

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
git-mastery-game/
├── src/
│   ├── components/          # React components
│   │   ├── WelcomeScreen.jsx
│   │   ├── ChapterSelect.jsx
│   │   ├── MissionScreen.jsx
│   │   ├── Sandbox.jsx
│   │   └── ...
│   ├── data/
│   │   └── chapters.js      # All chapter & mission content
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper functions
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── docs/                    # Documentation
├── .github/
│   └── workflows/           # GitHub Actions CI/CD
├── CONTRIBUTING.md          # Contribution guidelines
├── CLAUDE.md               # Instructions for Claude Code
└── README.md
```

## 🎯 Chapter Overview

| # | Chapter | Topics |
|---|---------|--------|
| 1 | Foundation Refresh | Clone, add, commit, .gitignore, remotes |
| 2 | Branching Mastery | Git Flow, trunk-based, stashing |
| 3 | Collaboration & PRs | Pull requests, code review, forks, conflicts |
| 4 | Rewriting History | Amend, rebase, squash, cherry-pick |
| 5 | Recovery & Troubleshooting | Reflog, reset, revert, bisect |
| 6 | Git Internals | Objects, trees, blobs, refs |
| 7 | Advanced Workflows | Submodules, monorepos, hooks, CI/CD |
| 8 | Security & Best Practices | Secrets, signing, branch protection |

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/add-new-mission`
3. Make your changes
4. Run linting: `npm run lint`
5. Commit with conventional commits: `git commit -m "feat(chapter-3): add merge conflict exercise"`
6. Push and create a Pull Request

### Adding New Missions

Missions are defined in `src/data/chapters.js`. Each mission follows this structure:

```javascript
{
  id: "3-7",                    // Chapter-Mission format
  title: "Your Mission Title",
  story: "The narrative context...",
  concept: "Git Concept Name",
  difficulty: 3,               // 1-5 scale
  xpReward: 180,
  challenges: [
    {
      type: "terminal",        // or "quiz" or "scenario"
      prompt: "What the user sees",
      expectedCommand: "git command",
      hint: "Full command hint",
      explanation: "Why this works"
    }
  ]
}
```

## 🤖 Using Claude Code

This project is optimized for development with [Claude Code](https://claude.ai/code). See [CLAUDE.md](CLAUDE.md) for AI-assisted development instructions.

### Example Claude Code Prompts

- "Add a new mission about git worktrees to chapter 7"
- "Create a visual component showing branch diagrams"
- "Add localStorage persistence for game progress"
- "Implement a leaderboard feature"

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel / Netlify / GitHub Pages

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Inspired by the journey of designers becoming full-stack
- Built with ❤️ for the DesignFlow AI team
- Git documentation and community resources

---

**Happy Learning! May your commits always be atomic and your merges conflict-free. 🚀**
