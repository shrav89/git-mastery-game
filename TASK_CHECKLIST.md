# ✅ Git Mastery - Task Checklist

## 🚀 START HERE - Phase 1 Tasks

### Week 1: Code Restructuring

#### Day 1-2: Split Components

```
□ Create folder structure:
  □ src/components/screens/
  □ src/components/game/
  □ src/components/common/
  □ src/contexts/
  □ src/hooks/
  □ src/data/chapters/

□ Extract WelcomeScreen.jsx
  □ Copy welcome screen JSX from App.jsx
  □ Add imports (React, Lucide icons)
  □ Export component
  □ Test renders correctly

□ Extract ChapterSelect.jsx
  □ Copy chapter select JSX
  □ Add necessary props
  □ Export component
  □ Test navigation works

□ Extract MissionScreen.jsx
  □ Copy mission screen JSX
  □ Add challenge handling logic
  □ Export component
  □ Test challenges work

□ Extract Sandbox.jsx
  □ Copy sandbox modal JSX
  □ Keep terminal simulation logic
  □ Export component
  □ Test commands work

□ Update App.jsx
  □ Import all components
  □ Remove extracted code
  □ Keep only state and routing
  □ Test full app flow
```

#### Day 3: Extract Data

```
□ Create src/data/chapters/chapter1-foundation.js
  □ Export chapter 1 data
  □ Include all missions
  
□ Create src/data/chapters/chapter2-branching.js
  □ Export chapter 2 data
  
□ Create remaining chapter files (3-8)
  □ chapter3-collaboration.js
  □ chapter4-rewriting.js
  □ chapter5-recovery.js
  □ chapter6-internals.js
  □ chapter7-workflows.js
  □ chapter8-security.js

□ Create src/data/chapters/index.js
  □ Import all chapters
  □ Export as array

□ Update component imports
  □ Import chapters from data folder
  □ Remove hardcoded data
  □ Test all chapters load
```

#### Day 4: Set Up Contexts

```
□ Create src/contexts/GameContext.jsx
  □ Create context
  □ Create reducer
  □ Create provider
  □ Export useGame hook

□ Create src/contexts/UserContext.jsx
  □ Create context
  □ Create reducer with user state
  □ Create provider
  □ Export useUser hook

□ Update main.jsx
  □ Wrap App with GameProvider
  □ Wrap App with UserProvider

□ Migrate App.jsx state to contexts
  □ Move gameState to GameContext
  □ Move user data to UserContext
  □ Update components to use hooks
```

---

### Week 2: Persistence

#### Day 5: Create Hooks

```
□ Create src/hooks/useLocalStorage.js
  □ Implement get from localStorage
  □ Implement set to localStorage
  □ Handle errors gracefully
  □ Test with simple data

□ Create src/hooks/useProgress.js
  □ Track completedMissions
  □ Track missionResults
  □ Add completeMission function
  □ Add isMissionCompleted function
  □ Test progress saves

□ Create src/hooks/useXP.js
  □ Define XP_LEVELS array
  □ Track totalXP
  □ Add addXP function
  □ Add getCurrentLevel function
  □ Add getProgressToNextLevel function
  □ Test XP calculations
```

#### Day 6: Streak System

```
□ Create src/hooks/useStreak.js
  □ Track currentStreak
  □ Track longestStreak
  □ Track lastActiveDate
  □ Add checkAndUpdateStreak function
  □ Handle streak reset logic
  □ Test streak updates daily
```

#### Day 7: Integration

```
□ Update UserContext with hooks
  □ Use useProgress for mission data
  □ Use useXP for experience points
  □ Use useStreak for daily tracking

□ Update components
  □ ChapterSelect shows saved progress
  □ XP shows correct total
  □ Level shows correctly

□ Add reset functionality
  □ Create resetAllProgress function
  □ Add confirmation modal
  □ Test reset clears everything
```

#### Day 8-10: Testing

```
□ Manual Testing
  □ Complete a mission → verify saves
  □ Refresh browser → verify persists
  □ Close and reopen → verify persists
  □ Complete multiple missions → verify all save
  □ Check XP accumulates correctly
  □ Check level calculates correctly

□ Edge Cases
  □ Test with localStorage disabled
  □ Test with corrupted data
  □ Test in incognito mode
  □ Test on different browsers

□ Bug Fixes
  □ List and fix any bugs found
  □ Re-test after fixes
```

---

## 📋 Phase 1 Completion Checklist

```
STRUCTURE
□ All components in separate files
□ All data in /data folder
□ Contexts set up and working
□ No file over 300 lines

PERSISTENCE  
□ useLocalStorage working
□ useProgress working
□ useXP working
□ useStreak working
□ Data persists after refresh

INTEGRATION
□ Components use contexts
□ UI reflects saved state
□ All features still work

TESTING
□ All manual tests pass
□ No console errors
□ Works in Chrome
□ Works in Firefox
□ Works in Safari

READY FOR PHASE 2: □
```

---

## 🎯 Quick Win Tasks (Do These First!)

These can be done independently and have immediate impact:

```
1. □ Add localStorage for player name (30 min)
     - Save name when entered
     - Load name on return
     - Skip welcome if name exists

2. □ Add localStorage for XP (30 min)
     - Save XP after each mission
     - Load XP on app start
     - Display correct total

3. □ Add localStorage for completed missions (1 hour)
     - Save array of completed mission IDs
     - Load on app start
     - Show checkmarks on completed

4. □ Add streak counter display (1 hour)
     - Track last active date
     - Calculate streak
     - Show in header

5. □ Add "Continue" button (30 min)
     - Find first incomplete mission
     - Button jumps directly to it
     - Shows on chapter select
```

---

## 📝 Daily Standup Template

Copy this for each day:

```
DATE: ___________

YESTERDAY:
- Completed: ___________
- Blockers: ___________

TODAY:
- Will do: ___________
- Need help with: ___________

NOTES:
___________
```

---

## 🔗 Important Links

- GitHub Repo: https://github.com/shrav89/git-mastery-game
- Project Plan: PROJECT_PLAN.md
- Visual Roadmap: ROADMAP_VISUAL.md
- Uxcel Analysis: (your uploaded document)
- Claude Code: Run `claude` in project directory

---

**Start with the Quick Wins, then tackle Phase 1 systematically!**

Good luck! 🚀
