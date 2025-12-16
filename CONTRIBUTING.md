# Contributing to Git Mastery

First off, thank you for considering contributing to Git Mastery! 🎉

This document provides guidelines and steps for contributing. Following these guidelines helps communicate that you respect the time of the developers managing this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js v18+
- npm or pnpm
- Git (you're learning it, after all! 😄)
- A code editor (VS Code recommended)

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/git-mastery-game.git
   cd git-mastery-game
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/your-org/git-mastery-game.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

## How Can I Contribute?

### 📝 Content Contributions

The most valuable contributions are often content-related:

- **New Missions**: Add missions to existing chapters
- **New Challenges**: Create quiz, terminal, or scenario challenges
- **Improve Explanations**: Make existing explanations clearer
- **Fix Errors**: Correct any Git misconceptions or typos
- **Translations**: Help translate content to other languages

### 🐛 Bug Reports

Found a bug? Please create an issue with:

- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/OS information

### 💡 Feature Requests

Have an idea? Open an issue with:

- Clear description of the feature
- Why it would be valuable
- Possible implementation approach
- Mockups/wireframes if applicable

### 🔧 Code Contributions

- Bug fixes
- New features
- Performance improvements
- Accessibility improvements
- Test coverage

## Development Workflow

### Branch Naming

Use descriptive branch names:

```
feature/add-rebase-mission
fix/sandbox-command-validation
docs/update-readme
style/mobile-responsive
refactor/extract-components
```

### Working on an Issue

1. **Check existing issues** to avoid duplicates
2. **Comment on the issue** to claim it
3. **Create a branch** from `main`:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes** with clear, atomic commits
5. **Test thoroughly** - play through the game
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**

## Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Prefer `const` over `let`
- Use destructuring where appropriate
- Keep components focused and small
- Extract reusable logic into custom hooks

```javascript
// ✅ Good
const MissionCard = ({ mission, onSelect, isUnlocked }) => {
  const { title, concept, difficulty } = mission;
  
  return (
    <button 
      onClick={() => isUnlocked && onSelect(mission)}
      disabled={!isUnlocked}
    >
      {title}
    </button>
  );
};

// ❌ Avoid
function MissionCard(props) {
  return (
    <button onClick={() => props.isUnlocked && props.onSelect(props.mission)}>
      {props.mission.title}
    </button>
  );
}
```

### Tailwind CSS

- Use utility classes directly in JSX
- Group related utilities logically
- Use consistent spacing scale (4, 6, 8, etc.)
- Prefer semantic color names from our palette

```javascript
// ✅ Good - logical grouping
<div className="flex items-center gap-4 p-4 bg-stone-900 rounded-xl border border-stone-800">

// ❌ Avoid - random ordering
<div className="border-stone-800 rounded-xl flex bg-stone-900 p-4 gap-4 items-center border">
```

### Content Writing

- Use clear, concise language
- Include real-world context in stories
- Make explanations beginner-friendly but technically accurate
- Use emojis sparingly for engagement
- Keep the designer persona consistent

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code change without feature/fix
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(chapter-4): add interactive rebase mission

fix(sandbox): handle edge case in command parsing

docs: add contribution guidelines

style(mission-screen): improve mobile spacing

refactor(hooks): extract useGameProgress hook
```

## Pull Request Process

### Before Submitting

- [ ] Run `npm run lint` and fix any errors
- [ ] Run `npm run format` to format code
- [ ] Test the full game flow
- [ ] Update documentation if needed
- [ ] Rebase on latest main if needed

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Content update
- [ ] Documentation
- [ ] Refactoring

## Testing
How did you test these changes?

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed my code
- [ ] Added necessary documentation
- [ ] No new warnings
```

### Review Process

1. At least one team member must approve
2. All CI checks must pass
3. No merge conflicts with main
4. Squash commits if requested

### After Merge

- Delete your feature branch
- Celebrate! 🎉

## Adding New Missions - Detailed Guide

### Step 1: Plan Your Mission

- What Git concept does it teach?
- What's the story context?
- What challenges will test understanding?
- What difficulty level (1-5)?

### Step 2: Write the Content

```javascript
{
  id: "3-7",
  title: "Handling Merge Conflicts Like a Pro",
  story: "Two team members edited the same component. Now Git is confused and needs your help to decide which changes to keep. Don't panic — this is a normal part of collaboration!",
  concept: "Advanced Conflict Resolution",
  difficulty: 4,
  xpReward: 200,
  challenges: [
    {
      type: "quiz",
      question: "What creates a merge conflict?",
      options: [
        "Merging any two branches",
        "Two branches modifying the same lines differently",
        "Having too many commits",
        "Pushing to a protected branch"
      ],
      correct: 1,
      explanation: "Conflicts occur when Git can't automatically determine which changes to keep because both branches modified the same lines."
    },
    {
      type: "terminal",
      prompt: "After resolving conflicts, stage the fixed files",
      expectedCommand: "git add",
      hint: "git add resolved-file.js",
      explanation: "After manually fixing conflicts in your editor, 'git add' tells Git you've resolved them."
    },
    {
      type: "scenario",
      situation: "You're in the middle of a complex merge with many conflicts. You realize you need to start over. What do you do?",
      options: [
        "Delete the repository and re-clone",
        "git merge --abort",
        "Close the terminal",
        "git reset --hard HEAD~100"
      ],
      correct: 1,
      explanation: "'git merge --abort' safely cancels the merge and returns your branch to the pre-merge state. It's the clean escape hatch!"
    }
  ]
}
```

### Step 3: Test Your Mission

1. Play through the entire mission
2. Verify all answers are correct
3. Check explanations are clear
4. Ensure XP rewards are balanced

## Questions?

- Check existing issues and discussions
- Ask in #git-mastery-dev Slack channel
- Tag maintainers in your PR

---

Thank you for contributing! Together we're making Git accessible to everyone. 🚀
