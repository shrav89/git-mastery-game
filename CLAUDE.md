# CLAUDE.md - Instructions for Claude Code

This file provides context and instructions for AI-assisted development with Claude Code.

## Project Overview

**Git Mastery** is an interactive educational game teaching Git from basics to advanced topics. It's built for designers transitioning to full-stack roles.

### Tech Stack
- React 18 with hooks
- Vite for bundling
- Tailwind CSS for styling
- Lucide React for icons
- No external state management (useState/useContext only)

### Key Files
- `src/App.jsx` - Main game component with state management
- `src/data/chapters.js` - All content (chapters, missions, challenges)
- `src/components/` - UI components

## Architecture

### Game State Flow
```
WelcomeScreen → ChapterSelect → MissionScreen → (back to ChapterSelect)
                      ↓
                  Sandbox (modal)
```

### State Structure
```javascript
{
  gameState: 'welcome' | 'chapters' | 'mission',
  playerName: string,
  completedMissions: string[],  // Array of mission IDs like "1-1", "2-3"
  xp: number,
  currentMission: Mission | null,
  currentChapter: Chapter | null
}
```

### Content Structure
```javascript
// Chapter
{
  id: number,
  title: string,
  subtitle: string,
  icon: LucideIcon,
  color: string,           // Tailwind gradient classes
  description: string,
  missions: Mission[]
}

// Mission
{
  id: string,              // Format: "chapterId-missionNumber"
  title: string,
  story: string,           // Narrative context
  concept: string,         // Git concept being taught
  difficulty: 1-5,
  xpReward: number,
  challenges: Challenge[]
}

// Challenge Types
{
  type: 'terminal',
  prompt: string,
  expectedCommand: string,  // Partial match used
  hint: string,
  explanation: string
}

{
  type: 'quiz',
  question: string,
  options: string[],
  correct: number,          // Index of correct answer
  explanation: string
}

{
  type: 'scenario',
  situation: string,
  options: string[],
  correct: number,
  explanation: string
}
```

## Common Tasks

### Adding a New Mission

1. Open `src/data/chapters.js`
2. Find the appropriate chapter
3. Add mission object to the `missions` array:

```javascript
{
  id: "2-7",  // Must be unique, format: chapter-number
  title: "Mission Title",
  story: "Story context that sets up the scenario...",
  concept: "Git Concept",
  difficulty: 3,
  xpReward: 180,
  challenges: [
    {
      type: "quiz",
      question: "Your question here?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 1,
      explanation: "Why B is correct..."
    },
    {
      type: "terminal",
      prompt: "What the user needs to do",
      expectedCommand: "git command",
      hint: "git command --with-flags",
      explanation: "What this command does..."
    }
  ]
}
```

### Adding a New Chapter

1. Add chapter object to `chapters` array in `src/data/chapters.js`
2. Import any needed Lucide icons
3. Follow existing chapter structure
4. Ensure chapter `id` is sequential

### Creating New Components

1. Create file in `src/components/`
2. Use functional components with hooks
3. Use Tailwind for styling
4. Import Lucide icons as needed:
   ```javascript
   import { IconName } from 'lucide-react';
   ```

### Styling Guidelines

- Use Tailwind utility classes
- Color palette:
  - Background: `stone-950`, `stone-900`
  - Text: `white`, `stone-300`, `stone-400`
  - Accents: `violet-500`, `pink-500`, `emerald-500`, `amber-400`
- Gradients: `bg-gradient-to-r from-violet-600 to-pink-600`
- Borders: `border border-stone-800`
- Rounded corners: `rounded-xl`, `rounded-2xl`

## Code Quality

### Before Committing
- Run `npm run lint` to check for errors
- Run `npm run format` to format code
- Test the game flow manually

### Commit Message Format
Follow conventional commits:
```
feat(chapter-3): add new merge conflict mission
fix(sandbox): correct command validation
docs: update README with new features
style: improve mobile responsiveness
refactor(missions): extract challenge components
```

## Feature Ideas to Implement

### High Priority
- [ ] LocalStorage persistence for progress
- [ ] Mobile-responsive design improvements
- [ ] Accessibility improvements (ARIA labels, keyboard nav)

### Medium Priority
- [ ] Sound effects and music toggle
- [ ] Achievement badges system
- [ ] Share progress on social media
- [ ] Dark/light theme toggle

### Future Features
- [ ] Multiplayer challenges
- [ ] Leaderboard with backend
- [ ] Custom mission creator
- [ ] Integration with real Git repos for practice

## Testing Commands

When implementing terminal challenges, these commands should be recognized:
- `git init`, `git clone`
- `git add`, `git commit`, `git push`, `git pull`
- `git branch`, `git checkout`, `git switch`
- `git merge`, `git rebase`
- `git stash`, `git stash pop`
- `git log`, `git status`, `git diff`
- `git reset`, `git revert`
- `git cherry-pick`, `git bisect`
- `git tag`, `git remote`
- `git fetch`, `git reflog`
- `git config`, `git cat-file`

## Useful Prompts for Claude Code

### Content
- "Add 3 new missions about [topic] to chapter [N]"
- "Create scenario challenges based on real-world Git disasters"
- "Write a mission teaching [git concept] using the design system context"

### Features
- "Add localStorage to persist game progress between sessions"
- "Create an animated visualization for [git concept]"
- "Add a skip button that deducts XP"
- "Implement streak tracking for consecutive correct answers"

### UI/UX
- "Improve the mobile layout for MissionScreen"
- "Add loading animations between screens"
- "Create a progress dashboard showing stats"

### Refactoring
- "Extract the chapter data into a separate file"
- "Create a custom hook for game state management"
- "Split the large component into smaller ones"

## Contact

For questions about the codebase, reach out to the team on Slack #git-mastery-dev
