# 🎯 Git Mastery Game - Master Project Plan
## From Current State to Uxcel-Level Learning Platform

---

## 📋 Table of Contents

1. [Vision & Goals](#vision--goals)
2. [Current State Assessment](#current-state-assessment)
3. [Target State](#target-state)
4. [Complete Roadmap](#complete-roadmap)
5. [Phase Details](#phase-details)
6. [Team Workflow](#team-workflow)
7. [Success Metrics](#success-metrics)
8. [Risk Management](#risk-management)

---

## 🎯 Vision & Goals

### Vision Statement
> Transform Git Mastery into the most engaging, effective, and enjoyable way to learn Git — making version control accessible to designers and non-developers worldwide.

### Primary Goals

| Goal | Metric | Target |
|------|--------|--------|
| **Engagement** | Daily Active Users | 70% return rate |
| **Completion** | Path completion rate | 60%+ users complete at least 1 path |
| **Learning** | Skill retention | 80% can apply skills after 30 days |
| **Satisfaction** | User rating | 4.8+ stars |
| **Growth** | User referrals | 30% organic growth |

### Target Users
- 🎨 **Primary:** Product Designers becoming full-stack
- 💼 **Secondary:** Non-technical professionals learning Git
- 🎓 **Tertiary:** Coding bootcamp students

---

## 📊 Current State Assessment

### What We Have ✅

```
✅ 8 Chapters with 48 missions
✅ 3 challenge types (quiz, terminal, scenario)
✅ Basic XP system
✅ Designer-focused storyline
✅ Git Sandbox for practice
✅ Clean UI with dark theme
✅ GitHub repo setup for collaboration
✅ Claude Code ready (CLAUDE.md)
```

### What's Missing ❌

```
❌ No progress persistence (resets on refresh)
❌ No streak/daily engagement system
❌ No achievements/badges
❌ No level progression (just XP number)
❌ No theory/reading content
❌ No boss challenges
❌ No time estimates
❌ No social features
❌ No certificates
❌ No onboarding assessment
❌ No multi-path structure
❌ Limited exercise types
```

### Technical Debt

```
⚠️ All code in single App.jsx file (~2000 lines)
⚠️ No state management solution
⚠️ No data persistence layer
⚠️ No component separation
⚠️ Hardcoded content in component
```

---

## 🏆 Target State

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        GIT MASTERY GAME                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │   PATH 1    │  │   PATH 2    │  │   PATH 3    │  ...       │
│  │ Git Basics  │  │  Branching  │  │   Collab    │            │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘            │
│         │                │                │                    │
│  ┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐            │
│  │  5 Levels   │  │  5 Levels   │  │  5 Levels   │            │
│  │  per Path   │  │  per Path   │  │  per Path   │            │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘            │
│         │                │                │                    │
│  ┌──────▼──────┐                                               │
│  │ 4 Missions  │  ← Each with 5-7 exercises                   │
│  │ + Boss Test │  ← Boss challenge unlocks next level         │
│  └─────────────┘                                               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                      GAMIFICATION LAYER                         │
├─────────────────────────────────────────────────────────────────┤
│  XP System → Levels → Achievements → Streaks → Leaderboards   │
│  Certificates → Social Sharing → Team Challenges              │
└─────────────────────────────────────────────────────────────────┘
```

### Feature Set by Release

| Release | Features | Timeline |
|---------|----------|----------|
| **v1.0** | Current game (baseline) | ✅ Done |
| **v1.5** | Persistence + Basic Gamification | Week 1-2 |
| **v2.0** | New Structure + UI Overhaul | Week 3-5 |
| **v2.5** | Advanced Gamification | Week 6-7 |
| **v3.0** | Social Features + Certificates | Week 8-10 |
| **v3.5** | Polish + Analytics | Week 11-12 |

---

## 🗺️ Complete Roadmap

### High-Level Timeline

```
WEEK 1-2: Foundation & Persistence
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Code restructuring
├── localStorage implementation  
├── Basic hooks setup
└── Data structure migration

WEEK 3-4: Core Gamification
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── XP & Level system
├── Achievement system
├── Streak tracking
└── Progress calculations

WEEK 5-6: UI/UX Overhaul
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Path Overview page
├── Mission Modal (Uxcel-style)
├── Progress Dashboard
└── New exercise types

WEEK 7-8: Content & Learning
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Theory sections
├── Boss Challenges
├── Skill Assessment
└── Onboarding flow

WEEK 9-10: Social & Recognition
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Leaderboards
├── Certificate generation
├── Social sharing
└── Profile pages

WEEK 11-12: Polish & Launch
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
├── Animations & micro-interactions
├── Performance optimization
├── Bug fixes
└── Launch preparation
```

---

## 📝 Phase Details

---

## PHASE 1: Foundation & Persistence
### Timeline: Week 1-2
### Goal: Restructure code and add data persistence

---

### Sprint 1.1: Code Restructuring (Days 1-3)

#### Task 1.1.1: Split App.jsx into Components
**Priority:** 🔴 Critical
**Effort:** 4 hours
**Owner:** Developer 1

**Current State:**
```
src/
└── App.jsx (2000+ lines, everything in one file)
```

**Target State:**
```
src/
├── components/
│   ├── screens/
│   │   ├── WelcomeScreen.jsx
│   │   ├── ChapterSelect.jsx
│   │   ├── MissionScreen.jsx
│   │   └── CompletionScreen.jsx
│   ├── game/
│   │   ├── Terminal.jsx
│   │   ├── Quiz.jsx
│   │   ├── Scenario.jsx
│   │   └── Sandbox.jsx
│   └── common/
│       ├── ProgressBar.jsx
│       ├── Button.jsx
│       └── Modal.jsx
├── App.jsx (thin, just routing)
└── main.jsx
```

**Steps:**
1. [ ] Create folder structure
2. [ ] Extract WelcomeScreen component
3. [ ] Extract ChapterSelect component  
4. [ ] Extract MissionScreen component
5. [ ] Extract Sandbox component
6. [ ] Extract common UI components
7. [ ] Update App.jsx to import components
8. [ ] Test all flows still work

**Acceptance Criteria:**
- [ ] No file exceeds 300 lines
- [ ] All existing functionality works
- [ ] Components are properly exported/imported

---

#### Task 1.1.2: Extract Data to Separate Files
**Priority:** 🔴 Critical
**Effort:** 3 hours
**Owner:** Developer 1

**Steps:**
1. [ ] Create `src/data/` folder
2. [ ] Create `src/data/chapters/` folder
3. [ ] Extract each chapter to separate file:
   ```
   src/data/chapters/
   ├── chapter1-foundation.js
   ├── chapter2-branching.js
   ├── chapter3-collaboration.js
   ├── chapter4-rewriting.js
   ├── chapter5-recovery.js
   ├── chapter6-internals.js
   ├── chapter7-workflows.js
   └── chapter8-security.js
   ```
4. [ ] Create `src/data/index.js` to export all
5. [ ] Update imports in components

**File Template:**
```javascript
// src/data/chapters/chapter1-foundation.js
import { BookOpen, GitCommit, ... } from 'lucide-react';

export const chapter1 = {
  id: 1,
  title: "Foundation Refresh",
  subtitle: "Git basics through a designer's lens",
  icon: BookOpen,
  color: "from-emerald-500 to-teal-600",
  missions: [...]
};
```

---

#### Task 1.1.3: Set Up Context Providers
**Priority:** 🔴 Critical
**Effort:** 3 hours
**Owner:** Developer 1

**Create Files:**

```javascript
// src/contexts/GameContext.jsx
import { createContext, useContext, useReducer } from 'react';

const GameContext = createContext();

const initialState = {
  gameState: 'welcome', // welcome | chapters | mission
  currentMission: null,
  currentChapter: null,
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'SET_GAME_STATE':
      return { ...state, gameState: action.payload };
    case 'SET_MISSION':
      return { ...state, currentMission: action.payload };
    case 'SET_CHAPTER':
      return { ...state, currentChapter: action.payload };
    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
```

```javascript
// src/contexts/UserContext.jsx
import { createContext, useContext, useReducer, useEffect } from 'react';

const UserContext = createContext();

const initialState = {
  playerName: '',
  xp: 0,
  level: 1,
  completedMissions: [],
  achievements: [],
  streak: { current: 0, longest: 0, lastActive: null },
};

// ... reducer and provider

export const useUser = () => useContext(UserContext);
```

**Steps:**
1. [ ] Create GameContext.jsx
2. [ ] Create UserContext.jsx
3. [ ] Wrap App with providers in main.jsx
4. [ ] Migrate state from App.jsx to contexts
5. [ ] Update components to use contexts

---

### Sprint 1.2: Persistence Layer (Days 4-7)

#### Task 1.2.1: Create useLocalStorage Hook
**Priority:** 🔴 Critical
**Effort:** 2 hours
**Owner:** Developer 2

```javascript
// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Get stored value or use initial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

---

#### Task 1.2.2: Create useProgress Hook
**Priority:** 🔴 Critical
**Effort:** 3 hours
**Owner:** Developer 2

```javascript
// src/hooks/useProgress.js
import { useLocalStorage } from './useLocalStorage';

export function useProgress() {
  const [progress, setProgress] = useLocalStorage('git-mastery-progress', {
    completedMissions: [],
    missionResults: {},
    pathProgress: {},
  });

  const completeMission = (missionId, results) => {
    setProgress(prev => ({
      ...prev,
      completedMissions: [...new Set([...prev.completedMissions, missionId])],
      missionResults: {
        ...prev.missionResults,
        [missionId]: results
      }
    }));
  };

  const isMissionCompleted = (missionId) => {
    return progress.completedMissions.includes(missionId);
  };

  const getPathProgress = (pathId) => {
    // Calculate completion percentage
  };

  const resetProgress = () => {
    setProgress({
      completedMissions: [],
      missionResults: {},
      pathProgress: {},
    });
  };

  return {
    progress,
    completeMission,
    isMissionCompleted,
    getPathProgress,
    resetProgress,
  };
}
```

---

#### Task 1.2.3: Create useXP Hook
**Priority:** 🔴 Critical
**Effort:** 2 hours
**Owner:** Developer 2

```javascript
// src/hooks/useXP.js
import { useLocalStorage } from './useLocalStorage';

const XP_LEVELS = [
  { level: 1, minXP: 0, title: 'Git Newbie' },
  { level: 2, minXP: 500, title: 'Git Apprentice' },
  { level: 3, minXP: 1200, title: 'Git Student' },
  { level: 4, minXP: 2500, title: 'Git Practitioner' },
  { level: 5, minXP: 4000, title: 'Git Developer' },
  { level: 6, minXP: 6000, title: 'Git Professional' },
  { level: 7, minXP: 8500, title: 'Git Expert' },
  { level: 8, minXP: 12000, title: 'Git Master' },
  { level: 9, minXP: 16000, title: 'Git Guru' },
  { level: 10, minXP: 21000, title: 'Git Legend' },
];

export function useXP() {
  const [xpData, setXPData] = useLocalStorage('git-mastery-xp', {
    totalXP: 0,
    xpHistory: [],
  });

  const addXP = (amount, source) => {
    setXPData(prev => ({
      totalXP: prev.totalXP + amount,
      xpHistory: [
        ...prev.xpHistory,
        { amount, source, date: new Date().toISOString() }
      ]
    }));
  };

  const getCurrentLevel = () => {
    const level = XP_LEVELS.reduce((acc, lvl) => {
      return xpData.totalXP >= lvl.minXP ? lvl : acc;
    }, XP_LEVELS[0]);
    return level;
  };

  const getXPToNextLevel = () => {
    const currentLevel = getCurrentLevel();
    const nextLevel = XP_LEVELS.find(l => l.level === currentLevel.level + 1);
    if (!nextLevel) return 0;
    return nextLevel.minXP - xpData.totalXP;
  };

  const getProgressToNextLevel = () => {
    const currentLevel = getCurrentLevel();
    const nextLevel = XP_LEVELS.find(l => l.level === currentLevel.level + 1);
    if (!nextLevel) return 100;
    
    const currentLevelXP = currentLevel.minXP;
    const nextLevelXP = nextLevel.minXP;
    const progress = ((xpData.totalXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    return Math.min(progress, 100);
  };

  return {
    totalXP: xpData.totalXP,
    addXP,
    getCurrentLevel,
    getXPToNextLevel,
    getProgressToNextLevel,
    XP_LEVELS,
  };
}
```

---

#### Task 1.2.4: Create useStreak Hook
**Priority:** 🟡 High
**Effort:** 3 hours
**Owner:** Developer 2

```javascript
// src/hooks/useStreak.js
import { useLocalStorage } from './useLocalStorage';

export function useStreak() {
  const [streakData, setStreakData] = useLocalStorage('git-mastery-streak', {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null,
    streakFreezes: 0,
  });

  const checkAndUpdateStreak = () => {
    const today = new Date().toDateString();
    const lastActive = streakData.lastActiveDate 
      ? new Date(streakData.lastActiveDate).toDateString()
      : null;

    if (lastActive === today) {
      // Already active today
      return streakData.currentStreak;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (lastActive === yesterdayStr) {
      // Consecutive day - increase streak
      const newStreak = streakData.currentStreak + 1;
      setStreakData(prev => ({
        ...prev,
        currentStreak: newStreak,
        longestStreak: Math.max(newStreak, prev.longestStreak),
        lastActiveDate: today,
      }));
      return newStreak;
    } else if (lastActive) {
      // Streak broken - reset to 1
      setStreakData(prev => ({
        ...prev,
        currentStreak: 1,
        lastActiveDate: today,
      }));
      return 1;
    } else {
      // First time - start at 1
      setStreakData(prev => ({
        ...prev,
        currentStreak: 1,
        lastActiveDate: today,
      }));
      return 1;
    }
  };

  const useStreakFreeze = () => {
    if (streakData.streakFreezes > 0) {
      setStreakData(prev => ({
        ...prev,
        streakFreezes: prev.streakFreezes - 1,
        lastActiveDate: new Date().toDateString(),
      }));
      return true;
    }
    return false;
  };

  const addStreakFreeze = () => {
    setStreakData(prev => ({
      ...prev,
      streakFreezes: prev.streakFreezes + 1,
    }));
  };

  return {
    ...streakData,
    checkAndUpdateStreak,
    useStreakFreeze,
    addStreakFreeze,
  };
}
```

---

#### Task 1.2.5: Integrate Persistence with Contexts
**Priority:** 🔴 Critical
**Effort:** 3 hours
**Owner:** Developer 1

**Steps:**
1. [ ] Update UserContext to use persistence hooks
2. [ ] Add auto-save on state changes
3. [ ] Add "reset progress" functionality
4. [ ] Add data export/import feature
5. [ ] Test persistence across browser refresh
6. [ ] Test on different browsers

---

### Sprint 1.3: Testing & Bug Fixes (Days 8-10)

#### Task 1.3.1: Manual Testing Checklist
**Priority:** 🔴 Critical
**Effort:** 4 hours
**Owner:** QA/Team

**Test Cases:**

```
PERSISTENCE TESTS
─────────────────────────────────────────
[ ] Progress saves when completing mission
[ ] Progress persists after browser refresh
[ ] Progress persists after closing browser
[ ] XP accumulates correctly
[ ] Streak updates daily
[ ] Streak resets if day missed
[ ] Multiple browsers don't conflict

GAME FLOW TESTS
─────────────────────────────────────────
[ ] Welcome screen shows for new users
[ ] Welcome screen skips for returning users
[ ] Chapter selection shows correct progress
[ ] Completed missions show checkmarks
[ ] Locked missions can't be clicked
[ ] XP displays correctly throughout
[ ] Level displays correctly

EDGE CASES
─────────────────────────────────────────
[ ] Handles localStorage full/disabled
[ ] Handles corrupted localStorage data
[ ] Works in incognito mode (no persistence)
[ ] Reset progress works completely
```

---

### Sprint 1 Deliverables Checklist

```
PHASE 1 COMPLETE WHEN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Code Structure
[ ] Components split into separate files
[ ] Data extracted to /data folder
[ ] Contexts set up (Game, User)
[ ] No file over 300 lines

Persistence
[ ] useLocalStorage hook working
[ ] useProgress hook working
[ ] useXP hook working
[ ] useStreak hook working
[ ] Progress persists across sessions

Integration
[ ] All hooks integrated with contexts
[ ] UI reflects persisted state
[ ] All existing features still work

Testing
[ ] All manual tests pass
[ ] No console errors
[ ] Works on Chrome, Firefox, Safari
```

---

## PHASE 2: Core Gamification
### Timeline: Week 3-4
### Goal: Implement XP levels, achievements, and streaks UI

---

### Sprint 2.1: Achievement System (Days 1-4)

#### Task 2.1.1: Create Achievements Data
**Priority:** 🟡 High
**Effort:** 3 hours
**Owner:** Developer 1

```javascript
// src/data/achievements.js
export const achievements = [
  // Beginner Achievements
  {
    id: 'first-steps',
    title: 'First Steps',
    description: 'Complete your first mission',
    icon: '🎉',
    category: 'beginner',
    xpReward: 50,
    condition: (progress) => progress.completedMissions.length >= 1,
  },
  {
    id: 'first-commit',
    title: 'First Commit',
    description: 'Learn about git commit',
    icon: '📝',
    category: 'beginner',
    xpReward: 50,
    condition: (progress) => progress.completedMissions.includes('1-3'),
  },
  {
    id: 'branch-out',
    title: 'Branch Out',
    description: 'Complete the branching chapter',
    icon: '🌿',
    category: 'beginner',
    xpReward: 100,
    condition: (progress) => /* chapter 2 complete */,
  },
  
  // Progress Achievements
  {
    id: 'ten-missions',
    title: 'Getting Serious',
    description: 'Complete 10 missions',
    icon: '🎯',
    category: 'progress',
    xpReward: 150,
    condition: (progress) => progress.completedMissions.length >= 10,
  },
  {
    id: 'halfway-there',
    title: 'Halfway There',
    description: 'Complete 50% of all missions',
    icon: '🏃',
    category: 'progress',
    xpReward: 300,
    condition: (progress, total) => 
      progress.completedMissions.length >= total / 2,
  },
  
  // Streak Achievements
  {
    id: 'three-day-streak',
    title: 'Consistent Learner',
    description: 'Maintain a 3-day streak',
    icon: '🔥',
    category: 'streak',
    xpReward: 75,
    condition: (_, __, streak) => streak.currentStreak >= 3,
  },
  {
    id: 'week-streak',
    title: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '💪',
    category: 'streak',
    xpReward: 200,
    condition: (_, __, streak) => streak.currentStreak >= 7,
  },
  {
    id: 'month-streak',
    title: 'Dedicated Master',
    description: 'Maintain a 30-day streak',
    icon: '👑',
    category: 'streak',
    xpReward: 1000,
    condition: (_, __, streak) => streak.currentStreak >= 30,
  },
  
  // Mastery Achievements
  {
    id: 'chapter-complete',
    title: 'Chapter Champion',
    description: 'Complete an entire chapter',
    icon: '🏆',
    category: 'mastery',
    xpReward: 250,
    condition: (progress) => /* any chapter complete */,
  },
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Complete 5 missions with 100% accuracy',
    icon: '💯',
    category: 'mastery',
    xpReward: 300,
    condition: (progress) => /* check mission results */,
  },
  {
    id: 'git-master',
    title: 'Git Master',
    description: 'Complete all missions',
    icon: '🎓',
    category: 'mastery',
    xpReward: 1000,
    condition: (progress, total) => 
      progress.completedMissions.length >= total,
  },
  
  // Hidden Achievements
  {
    id: 'night-owl',
    title: 'Night Owl',
    description: 'Complete a mission after midnight',
    icon: '🦉',
    category: 'hidden',
    hidden: true,
    xpReward: 100,
    condition: () => new Date().getHours() >= 0 && new Date().getHours() < 5,
  },
  {
    id: 'speed-demon',
    title: 'Speed Demon',
    description: 'Complete a mission in under 2 minutes',
    icon: '⚡',
    category: 'hidden',
    hidden: true,
    xpReward: 150,
    condition: (_, __, ___, missionTime) => missionTime < 120,
  },
];

export const achievementCategories = [
  { id: 'beginner', title: 'Getting Started', icon: '🌱' },
  { id: 'progress', title: 'Making Progress', icon: '📈' },
  { id: 'streak', title: 'Consistency', icon: '🔥' },
  { id: 'mastery', title: 'Mastery', icon: '👑' },
  { id: 'hidden', title: 'Secret', icon: '🔮' },
];
```

---

#### Task 2.1.2: Create useAchievements Hook
**Priority:** 🟡 High
**Effort:** 4 hours
**Owner:** Developer 2

```javascript
// src/hooks/useAchievements.js
import { useLocalStorage } from './useLocalStorage';
import { achievements } from '../data/achievements';
import { useProgress } from './useProgress';
import { useStreak } from './useStreak';

export function useAchievements() {
  const [unlockedAchievements, setUnlockedAchievements] = useLocalStorage(
    'git-mastery-achievements',
    []
  );
  const [newAchievement, setNewAchievement] = useState(null);
  const { progress } = useProgress();
  const streakData = useStreak();

  const checkAchievements = (additionalContext = {}) => {
    const totalMissions = 48; // or calculate dynamically
    const newlyUnlocked = [];

    achievements.forEach(achievement => {
      // Skip if already unlocked
      if (unlockedAchievements.find(a => a.id === achievement.id)) return;

      // Check condition
      const isUnlocked = achievement.condition(
        progress,
        totalMissions,
        streakData,
        additionalContext.missionTime
      );

      if (isUnlocked) {
        newlyUnlocked.push({
          ...achievement,
          unlockedAt: new Date().toISOString(),
        });
      }
    });

    if (newlyUnlocked.length > 0) {
      setUnlockedAchievements(prev => [...prev, ...newlyUnlocked]);
      // Show first new achievement (queue others)
      setNewAchievement(newlyUnlocked[0]);
    }

    return newlyUnlocked;
  };

  const dismissNewAchievement = () => {
    setNewAchievement(null);
  };

  const getAchievementsByCategory = (category) => {
    return achievements.filter(a => a.category === category);
  };

  const isAchievementUnlocked = (achievementId) => {
    return unlockedAchievements.some(a => a.id === achievementId);
  };

  const getProgress = () => {
    const total = achievements.filter(a => !a.hidden).length;
    const unlocked = unlockedAchievements.filter(
      a => !achievements.find(ach => ach.id === a.id)?.hidden
    ).length;
    return { unlocked, total, percentage: (unlocked / total) * 100 };
  };

  return {
    achievements,
    unlockedAchievements,
    newAchievement,
    checkAchievements,
    dismissNewAchievement,
    getAchievementsByCategory,
    isAchievementUnlocked,
    getProgress,
  };
}
```

---

#### Task 2.1.3: Create Achievement Toast Component
**Priority:** 🟡 High
**Effort:** 2 hours
**Owner:** Developer 1

```jsx
// src/components/gamification/AchievementToast.jsx
import { useEffect, useState } from 'react';
import { Award, X } from 'lucide-react';

export function AchievementToast({ achievement, onDismiss }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onDismiss, 300); // Wait for animation
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [achievement]);

  if (!achievement) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 shadow-2xl max-w-sm">
        <div className="flex items-start gap-3">
          <div className="text-4xl">{achievement.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-white" />
              <span className="text-white/80 text-sm">Achievement Unlocked!</span>
            </div>
            <h3 className="text-white font-bold text-lg">{achievement.title}</h3>
            <p className="text-white/80 text-sm">{achievement.description}</p>
            <div className="mt-2 text-amber-200 text-sm font-medium">
              +{achievement.xpReward} XP
            </div>
          </div>
          <button 
            onClick={onDismiss}
            className="text-white/60 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

#### Task 2.1.4: Create Achievement Grid Component
**Priority:** 🟡 High
**Effort:** 3 hours
**Owner:** Developer 1

```jsx
// src/components/gamification/AchievementGrid.jsx
import { useAchievements } from '../../hooks/useAchievements';
import { achievementCategories } from '../../data/achievements';
import { Lock } from 'lucide-react';

export function AchievementGrid() {
  const { 
    achievements, 
    isAchievementUnlocked, 
    getProgress,
    getAchievementsByCategory 
  } = useAchievements();
  
  const progress = getProgress();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Achievements</h2>
        <div className="text-stone-400">
          {progress.unlocked}/{progress.total} unlocked
        </div>
      </div>

      {achievementCategories.map(category => (
        <div key={category.id} className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>{category.icon}</span>
            {category.title}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {getAchievementsByCategory(category.id).map(achievement => {
              const unlocked = isAchievementUnlocked(achievement.id);
              const isHidden = achievement.hidden && !unlocked;
              
              return (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-xl border transition-all ${
                    unlocked
                      ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/30'
                      : 'bg-stone-900 border-stone-800 opacity-60'
                  }`}
                >
                  <div className="text-3xl mb-2">
                    {isHidden ? '❓' : achievement.icon}
                  </div>
                  <h4 className="font-medium text-sm">
                    {isHidden ? '???' : achievement.title}
                  </h4>
                  <p className="text-xs text-stone-400 mt-1">
                    {isHidden ? 'Complete to reveal' : achievement.description}
                  </p>
                  {!unlocked && !isHidden && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-stone-500">
                      <Lock className="w-3 h-3" />
                      +{achievement.xpReward} XP
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

### Sprint 2.2: Level System UI (Days 5-7)

#### Task 2.2.1: Create Level Progress Component
**Priority:** 🟡 High
**Effort:** 2 hours

```jsx
// src/components/gamification/LevelProgress.jsx
import { useXP } from '../../hooks/useXP';
import { Star, Zap } from 'lucide-react';

export function LevelProgress({ compact = false }) {
  const { 
    totalXP, 
    getCurrentLevel, 
    getXPToNextLevel, 
    getProgressToNextLevel 
  } = useXP();
  
  const level = getCurrentLevel();
  const progress = getProgressToNextLevel();
  const xpToNext = getXPToNextLevel();

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">{level.level}</span>
        </div>
        <div className="flex-1">
          <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <span className="text-amber-400 font-medium">{totalXP} XP</span>
      </div>
    );
  }

  return (
    <div className="bg-stone-900 rounded-xl p-4 border border-stone-800">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">{level.level}</span>
        </div>
        <div>
          <h3 className="font-bold text-lg">{level.title}</h3>
          <div className="flex items-center gap-2 text-amber-400">
            <Zap className="w-4 h-4" />
            <span>{totalXP} XP</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between text-sm text-stone-400">
          <span>Progress to Level {level.level + 1}</span>
          <span>{xpToNext} XP needed</span>
        </div>
        <div className="h-3 bg-stone-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
```

---

#### Task 2.2.2: Create Streak Display Component
**Priority:** 🟡 High
**Effort:** 2 hours

```jsx
// src/components/gamification/StreakDisplay.jsx
import { useStreak } from '../../hooks/useStreak';
import { Flame, Snowflake } from 'lucide-react';

export function StreakDisplay({ compact = false }) {
  const { currentStreak, longestStreak, streakFreezes } = useStreak();

  if (compact) {
    return (
      <div className="flex items-center gap-1">
        <Flame className={`w-5 h-5 ${currentStreak > 0 ? 'text-orange-500' : 'text-stone-600'}`} />
        <span className={`font-bold ${currentStreak > 0 ? 'text-orange-400' : 'text-stone-500'}`}>
          {currentStreak}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-stone-900 rounded-xl p-4 border border-stone-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Daily Streak</h3>
        {streakFreezes > 0 && (
          <div className="flex items-center gap-1 text-cyan-400 text-sm">
            <Snowflake className="w-4 h-4" />
            <span>{streakFreezes} freeze{streakFreezes > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className={`text-4xl font-bold ${currentStreak > 0 ? 'text-orange-400' : 'text-stone-500'}`}>
            {currentStreak}
          </div>
          <div className="text-sm text-stone-400">Current</div>
        </div>
        
        <Flame className={`w-12 h-12 ${currentStreak > 0 ? 'text-orange-500 animate-pulse' : 'text-stone-700'}`} />
        
        <div className="text-center">
          <div className="text-4xl font-bold text-stone-400">
            {longestStreak}
          </div>
          <div className="text-sm text-stone-400">Best</div>
        </div>
      </div>
      
      {currentStreak > 0 && (
        <div className="mt-4 text-center text-sm text-stone-400">
          🔥 {currentStreak} day{currentStreak > 1 ? 's' : ''} strong! Keep it up!
        </div>
      )}
    </div>
  );
}
```

---

### Sprint 2.3: Integration & Testing (Days 8-10)

#### Task 2.3.1: Integrate Gamification into Game Flow
**Priority:** 🔴 Critical
**Effort:** 4 hours

**Steps:**
1. [ ] Show LevelProgress in header/sidebar
2. [ ] Show StreakDisplay on chapter select
3. [ ] Call checkAchievements after mission complete
4. [ ] Show AchievementToast when unlocked
5. [ ] Add XP when completing missions
6. [ ] Update streak on daily activity
7. [ ] Add Achievements page/modal

---

#### Task 2.3.2: Add XP Animations
**Priority:** 🟢 Medium
**Effort:** 3 hours

```jsx
// src/components/gamification/XPGain.jsx
// Floating +XP animation when earning points
```

---

### Sprint 2 Deliverables Checklist

```
PHASE 2 COMPLETE WHEN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Achievement System
[ ] 20+ achievements defined
[ ] useAchievements hook working
[ ] Achievements unlock correctly
[ ] AchievementToast shows on unlock
[ ] AchievementGrid displays all achievements
[ ] Hidden achievements work correctly

Level System
[ ] 10 levels with XP thresholds
[ ] Level calculates correctly from XP
[ ] Progress to next level shows
[ ] Level up celebration/animation

Streak System
[ ] Streak tracks daily activity
[ ] Streak increases on consecutive days
[ ] Streak resets on missed day
[ ] Streak freezes work
[ ] Streak display updates

Integration
[ ] Gamification shows throughout app
[ ] XP adds from all sources
[ ] Achievements check at right times
[ ] All animations smooth
```

---

## PHASE 3: UI/UX Overhaul
### Timeline: Week 5-6
### Goal: Implement Uxcel-style interface

---

### Key Components to Build

1. **PathOverview** - Main learning path page
2. **MissionModal** - Uxcel-style lesson launcher
3. **ProgressDashboard** - Sidebar with stats
4. **ExerciseRenderer** - Handle multiple exercise types
5. **TheoryReader** - Reading mode for concepts

### Wireframes Reference

See the Uxcel analysis document for detailed wireframes.

---

## PHASE 4: Content & Learning
### Timeline: Week 7-8
### Goal: Add theory sections, boss challenges, and onboarding

---

### Key Features

1. **Theory Sections** - "Read Theory" option per mission
2. **Boss Challenges** - End-of-level comprehensive tests
3. **Skill Assessment** - Onboarding quiz
4. **Improved Onboarding** - Guide to first win

---

## PHASE 5: Social & Recognition
### Timeline: Week 9-10
### Goal: Add leaderboards, certificates, sharing

---

### Key Features

1. **Leaderboards** - Weekly/all-time rankings
2. **Certificates** - PDF generation
3. **Social Sharing** - Share achievements
4. **Profile Pages** - Public learning profiles

---

## PHASE 6: Polish & Launch
### Timeline: Week 11-12
### Goal: Final polish and launch preparation

---

### Key Tasks

1. Animations & micro-interactions
2. Performance optimization
3. Accessibility audit
4. Bug fixes
5. Analytics setup
6. Launch marketing

---

## 👥 Team Workflow

### Git Workflow

```
main (protected)
  │
  ├── develop (integration branch)
  │     │
  │     ├── feature/phase-1-persistence
  │     ├── feature/phase-2-achievements
  │     ├── feature/phase-3-ui-overhaul
  │     └── fix/streak-calculation
  │
  └── release/v1.5
```

### Branch Naming

```
feature/phase-X-description
fix/bug-description
docs/documentation-update
refactor/component-name
```

### PR Process

1. Create feature branch from develop
2. Make changes with atomic commits
3. Push and create PR
4. Request review from team member
5. Address feedback
6. Squash and merge to develop
7. Delete feature branch

### Daily Standup Questions

1. What did you complete yesterday?
2. What will you work on today?
3. Any blockers?

### Weekly Review

- Demo completed features
- Review metrics
- Plan next week
- Celebrate wins!

---

## 📊 Success Metrics

### Phase 1 Metrics (Week 2)
- [ ] 100% persistence working
- [ ] 0 data loss bugs
- [ ] < 100ms load time for saved data

### Phase 2 Metrics (Week 4)
- [ ] 20+ achievements implemented
- [ ] Streak tracking accurate
- [ ] Level system working

### Phase 3 Metrics (Week 6)
- [ ] New UI implemented
- [ ] User feedback positive
- [ ] Mobile responsive

### Phase 4 Metrics (Week 8)
- [ ] Theory content for all missions
- [ ] Boss challenges for all levels
- [ ] Onboarding completion > 90%

### Phase 5 Metrics (Week 10)
- [ ] Leaderboard functional
- [ ] Certificate generation working
- [ ] Social sharing implemented

### Launch Metrics (Week 12)
- [ ] < 3s initial load time
- [ ] 0 critical bugs
- [ ] 4.5+ user rating

---

## ⚠️ Risk Management

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scope creep | High | High | Strict phase boundaries |
| Technical debt | Medium | Medium | Regular refactoring |
| Team availability | Medium | High | Buffer time in schedule |
| Browser compatibility | Low | Medium | Early cross-browser testing |
| Data loss bugs | Low | Critical | Extensive persistence testing |

---

## 📎 Appendix

### Tools & Resources

- **Design:** Figma for mockups
- **Development:** VS Code, Claude Code
- **Version Control:** Git, GitHub
- **Communication:** Slack
- **Project Management:** Linear/Notion

### Reference Documents

- Uxcel Analysis Document (provided)
- CLAUDE.md (in repo)
- CONTRIBUTING.md (in repo)

---

## 🚀 Let's Build Something Amazing!

This plan transforms Git Mastery from a simple quiz game into a world-class learning platform. Each phase builds on the previous, ensuring steady progress while maintaining quality.

**Remember:** Ship early, iterate often, and always prioritize user experience!

---

*Document Version: 1.0*
*Last Updated: December 2025*
*Next Review: End of Phase 1*
