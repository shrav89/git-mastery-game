import { BookOpen, GitBranch, Users, RefreshCw, Zap, Database, Layers, Shield } from 'lucide-react';

export const chapters = [
  {
    id: 1,
    title: "Foundation Refresh",
    subtitle: "Git basics through a designer's lens",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-600",
    description: "Before diving deep, let's ensure your Git foundation is solid. These aren't your typical basics — they're reframed for how designers actually work.",
    missions: [
      {
        id: "1-1",
        title: "Your Design Repository",
        story: "Welcome to DesignFlow AI! You've just joined as Senior Product Designer. The engineering team uses Git for everything — including design systems. Your first task: set up your local environment for the design-system repo.",
        concept: "Repository Setup & Clone",
        difficulty: 1,
        xpReward: 100,
        challenges: [
          {
            type: "terminal",
            prompt: "Clone the design-system repository from GitHub",
            expectedCommand: "git clone",
            hint: "git clone https://github.com/designflow/design-system.git",
            explanation: "git clone creates a local copy of a remote repository. Unlike downloading a ZIP, it preserves all Git history and connection to the remote."
          },
          {
            type: "quiz",
            question: "After cloning, what hidden folder contains all Git data?",
            options: [".github", ".git", ".gitconfig", ".repository"],
            correct: 1,
            explanation: "The .git folder is where Git stores all version history, branches, and configuration. Never delete it!"
          }
        ]
      },
      {
        id: "1-2",
        title: "Tracking Design Tokens",
        story: "You've created a new tokens.json file for the design system colors. Before it can be shared with the team, Git needs to know about it.",
        concept: "Staging & The Index",
        difficulty: 1,
        xpReward: 100,
        challenges: [
          {
            type: "quiz",
            question: "What's the difference between 'git add .' and 'git add -A'?",
            options: [
              "No difference",
              "'git add .' ignores deletions, '-A' includes everything",
              "'git add -A' only works in root directory",
              "'git add .' is faster"
            ],
            correct: 1,
            explanation: "'git add .' stages new and modified files but ignores deletions. 'git add -A' (or --all) stages everything including deletions. In modern Git (2.x+), they behave the same in the root directory."
          },
          {
            type: "terminal",
            prompt: "Stage only the tokens.json file (not everything)",
            expectedCommand: "git add tokens.json",
            hint: "git add tokens.json",
            explanation: "Staging specific files gives you control over what goes into each commit. This is crucial for keeping commits focused and reviewable."
          },
          {
            type: "scenario",
            situation: "You accidentally staged node_modules folder (huge!). How do you unstage it without losing other staged changes?",
            options: [
              "git reset HEAD node_modules",
              "git checkout node_modules",
              "git rm node_modules",
              "Delete and re-add everything"
            ],
            correct: 0,
            explanation: "'git reset HEAD <path>' unstages files while keeping your working directory unchanged. This is safe and surgical."
          }
        ]
      },
      {
        id: "1-3",
        title: "Commit Messages That Don't Suck",
        story: "The lead dev just rejected your PR with one comment: 'Please write better commit messages.' Time to learn the art of commit communication.",
        concept: "Commit Best Practices",
        difficulty: 1,
        xpReward: 120,
        challenges: [
          {
            type: "quiz",
            question: "Which commit message follows best practices?",
            options: [
              "fixed stuff",
              "Update button component styles for accessibility",
              "changes",
              "WIP"
            ],
            correct: 1,
            explanation: "Good commit messages: start with a verb, explain WHAT and WHY, are concise but descriptive. 'fixed stuff' tells reviewers nothing useful."
          },
          {
            type: "quiz",
            question: "The conventional commits format 'feat:', 'fix:', 'docs:' is used for?",
            options: [
              "Making commits look pretty",
              "Automated changelog generation and semantic versioning",
              "GitHub requirements",
              "Team preference only"
            ],
            correct: 1,
            explanation: "Conventional Commits enable tools to automatically generate changelogs, determine version bumps, and trigger CI/CD pipelines based on commit types."
          },
          {
            type: "terminal",
            prompt: "Make a commit with message: 'feat(tokens): add color primitives for dark mode'",
            expectedCommand: "git commit -m",
            hint: "git commit -m \"feat(tokens): add color primitives for dark mode\"",
            explanation: "The format is: type(scope): description. This follows Conventional Commits specification used by many professional teams."
          }
        ]
      },
      {
        id: "1-4",
        title: "The .gitignore Shield",
        story: "ALERT! You almost committed your .env file containing the Figma API key. Let's set up proper protection.",
        concept: "Ignoring Files",
        difficulty: 2,
        xpReward: 150,
        challenges: [
          {
            type: "quiz",
            question: "You added 'config.json' to .gitignore but it's still being tracked. Why?",
            options: [
              ".gitignore is broken",
              "The file was already committed before adding to .gitignore",
              "You need to restart Git",
              "config.json is a protected filename"
            ],
            correct: 1,
            explanation: ".gitignore only prevents NEW files from being tracked. Already-tracked files need to be explicitly untracked with 'git rm --cached filename'."
          },
          {
            type: "terminal",
            prompt: "Remove config.json from Git tracking (but keep the local file)",
            expectedCommand: "git rm --cached",
            hint: "git rm --cached config.json",
            explanation: "The --cached flag removes from Git's index only, preserving your local file. Without it, the file would be deleted!"
          },
          {
            type: "scenario",
            situation: "Your .gitignore has '*.sketch' but '/assets/*.sketch' files are still tracked. What pattern do you need?",
            options: [
              "assets/*.sketch",
              "**/assets/*.sketch",
              "!assets/*.sketch",
              "/assets/**/*.sketch"
            ],
            correct: 0,
            explanation: "If files are in a specific folder, use 'folder/*.extension'. The ** glob is for matching across multiple directory levels."
          }
        ]
      },
      {
        id: "1-5",
        title: "Remote Reality",
        story: "Your local changes are ready. Time to share with the team! But first, let's understand how local and remote repositories communicate.",
        concept: "Remotes & Syncing",
        difficulty: 2,
        xpReward: 150,
        challenges: [
          {
            type: "quiz",
            question: "What does 'origin' refer to in Git?",
            options: [
              "Your first commit",
              "The default name for your primary remote repository",
              "The main branch",
              "Where Git was installed"
            ],
            correct: 1,
            explanation: "'origin' is just a conventional name for the primary remote. You can have multiple remotes (origin, upstream, etc.) pointing to different repositories."
          },
          {
            type: "quiz",
            question: "'git fetch' vs 'git pull' — what's the key difference?",
            options: [
              "fetch is faster",
              "fetch downloads changes without merging; pull does both",
              "pull only works with origin",
              "No difference, they're aliases"
            ],
            correct: 1,
            explanation: "'git fetch' downloads remote changes to your local repo but doesn't modify your working files. 'git pull' = fetch + merge. Fetch is safer for reviewing changes first."
          },
          {
            type: "terminal",
            prompt: "Push your current branch to origin",
            expectedCommand: "git push",
            hint: "git push origin main (or your branch name)",
            explanation: "git push uploads your local commits to the remote repository. The first push of a new branch needs -u flag to set up tracking."
          }
        ]
      },
      {
        id: "1-6",
        title: "Status & Diff Mastery",
        story: "Before your code review, you want to double-check exactly what changed. Let's master the art of inspecting changes.",
        concept: "Inspecting Changes",
        difficulty: 2,
        xpReward: 130,
        challenges: [
          {
            type: "quiz",
            question: "You want to see what you're about to commit (staged changes only). Which command?",
            options: [
              "git diff",
              "git diff --staged",
              "git diff HEAD",
              "git status -v"
            ],
            correct: 1,
            explanation: "'git diff' shows unstaged changes. 'git diff --staged' (or --cached) shows what's staged for commit. 'git diff HEAD' shows all changes since last commit."
          },
          {
            type: "terminal",
            prompt: "View the last 3 commits in a compact one-line format",
            expectedCommand: "git log --oneline -3",
            hint: "git log --oneline -3",
            explanation: "--oneline condenses each commit to one line. Combined with -n (or just -3), you get a quick overview of recent history."
          },
          {
            type: "quiz",
            question: "What does 'git show HEAD~2' display?",
            options: [
              "The next 2 commits",
              "The commit 2 steps before HEAD",
              "The last 2 commits",
              "Comparison between HEAD and 2nd commit"
            ],
            correct: 1,
            explanation: "HEAD~2 means '2 commits before HEAD'. 'git show' displays the full commit details including the diff. This is great for reviewing specific historical changes."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Branching Mastery",
    subtitle: "Professional branching strategies",
    icon: GitBranch,
    color: "from-blue-500 to-indigo-600",
    description: "Branching is where Git's power truly shines. Learn strategies used by professional teams to manage features, releases, and hotfixes.",
    missions: [
      {
        id: "2-1",
        title: "Branch Basics Revisited",
        story: "The design system needs a new Button variant. But you can't work directly on main — that would break things for everyone. Time to branch!",
        concept: "Creating & Switching Branches",
        difficulty: 2,
        xpReward: 120,
        challenges: [
          {
            type: "terminal",
            prompt: "Create a new branch called 'feature/button-variants' and switch to it in one command",
            expectedCommand: "git checkout -b feature/button-variants",
            hint: "git checkout -b feature/button-variants",
            explanation: "-b flag creates the branch and switches to it. Modern Git also has 'git switch -c' which is more intuitive."
          },
          {
            type: "quiz",
            question: "What's the difference between 'git branch -d' and 'git branch -D'?",
            options: [
              "-D is faster",
              "-d is safe delete (only merged), -D force deletes",
              "-D deletes remotely too",
              "No difference"
            ],
            correct: 1,
            explanation: "-d won't delete if the branch has unmerged changes (safety feature). -D force deletes regardless. Use -D carefully!"
          },
          {
            type: "quiz",
            question: "You're on 'feature/button'. What does 'git branch -vv' show you?",
            options: [
              "All branches verbosely",
              "Branches with their tracking remotes and ahead/behind status",
              "Branch creation dates",
              "Branch authors"
            ],
            correct: 1,
            explanation: "-vv shows each branch's last commit AND its upstream tracking branch with ahead/behind count. Essential for understanding your branch state."
          }
        ]
      },
      {
        id: "2-2",
        title: "Git Flow: The Classic Strategy",
        story: "DesignFlow AI uses Git Flow. You need to understand this branching model to work effectively with the team.",
        concept: "Git Flow Branching Model",
        difficulty: 3,
        xpReward: 180,
        challenges: [
          {
            type: "quiz",
            question: "In Git Flow, what are the two main eternal branches?",
            options: [
              "feature and release",
              "main and develop",
              "production and staging",
              "master and feature"
            ],
            correct: 1,
            explanation: "Git Flow has two permanent branches: 'main' (production-ready code) and 'develop' (integration branch for features). Features branch from develop, releases merge to both."
          },
          {
            type: "scenario",
            situation: "You finished your feature. In Git Flow, where should you merge it?",
            options: [
              "Directly to main",
              "To develop",
              "To release",
              "To hotfix"
            ],
            correct: 1,
            explanation: "Features always merge back to develop, never directly to main. Main only receives code from release branches or hotfixes."
          },
          {
            type: "quiz",
            question: "A critical bug is in production! In Git Flow, what branch type do you create?",
            options: [
              "feature/bugfix",
              "release/patch",
              "hotfix/critical-bug",
              "develop/fix"
            ],
            correct: 2,
            explanation: "Hotfix branches are created from main for urgent production fixes. They merge to both main AND develop to keep them in sync."
          },
          {
            type: "quiz",
            question: "When is a 'release' branch created in Git Flow?",
            options: [
              "For every feature",
              "When develop has enough features for a release",
              "Only on Fridays",
              "After merging to main"
            ],
            correct: 1,
            explanation: "Release branches are cut from develop when it's feature-complete for a version. They allow final testing while develop continues with new features."
          }
        ]
      },
      {
        id: "2-3",
        title: "Trunk-Based Development",
        story: "The mobile team uses trunk-based development instead of Git Flow. As you collaborate across teams, you need to understand this alternative.",
        concept: "Trunk-Based Development",
        difficulty: 3,
        xpReward: 180,
        challenges: [
          {
            type: "quiz",
            question: "What's the core principle of trunk-based development?",
            options: [
              "Long-lived feature branches",
              "Short-lived branches merged frequently to main/trunk",
              "No branches at all",
              "Weekly merges only"
            ],
            correct: 1,
            explanation: "Trunk-based development emphasizes small, frequent integrations. Branches live for hours or days, not weeks. This reduces merge conflicts and integration problems."
          },
          {
            type: "quiz",
            question: "How do trunk-based teams handle incomplete features?",
            options: [
              "Keep them in long branches",
              "Feature flags/toggles",
              "Don't work on incomplete features",
              "Separate repositories"
            ],
            correct: 1,
            explanation: "Feature flags let you merge incomplete code to main while hiding it from users. This enables continuous integration without exposing unfinished work."
          },
          {
            type: "scenario",
            situation: "Your company wants faster releases with less merge pain. Which strategy fits better?",
            options: [
              "Git Flow with longer-lived branches",
              "Trunk-based with feature flags",
              "No version control",
              "Manual file copying"
            ],
            correct: 1,
            explanation: "Trunk-based development with feature flags enables continuous deployment. It's preferred by companies like Google, Facebook, and modern startups."
          }
        ]
      },
      {
        id: "2-4",
        title: "Feature Branch Workflow",
        story: "Let's practice the day-to-day workflow of feature branches — from creation to merge.",
        concept: "Feature Branch Lifecycle",
        difficulty: 2,
        xpReward: 150,
        challenges: [
          {
            type: "terminal",
            prompt: "Your branch is behind main. Update it with latest changes (fetch + merge approach)",
            expectedCommand: "git fetch origin",
            hint: "First: git fetch origin, then: git merge origin/main",
            explanation: "Fetching first lets you review incoming changes. Then merging origin/main brings those changes into your branch."
          },
          {
            type: "quiz",
            question: "Your feature branch has diverged from main. What does this mean?",
            options: [
              "Your branch is broken",
              "Both branches have new commits the other doesn't have",
              "You need to delete your branch",
              "Main has been reset"
            ],
            correct: 1,
            explanation: "Diverged means both you AND main have made commits since you branched. You'll need to merge or rebase to reconcile them."
          },
          {
            type: "terminal",
            prompt: "After merging, delete your local feature branch",
            expectedCommand: "git branch -d",
            hint: "git branch -d feature/button-variants",
            explanation: "Cleaning up merged branches keeps your local repo tidy. Use -d for safe deletion (warns if not merged) or -D to force delete."
          }
        ]
      },
      {
        id: "2-5",
        title: "Branch Naming Conventions",
        story: "The team has standards for branch names. Following them makes automation and understanding easier.",
        concept: "Naming Standards",
        difficulty: 2,
        xpReward: 120,
        challenges: [
          {
            type: "quiz",
            question: "Which branch name follows common conventions?",
            options: [
              "johns-button-fix",
              "feature/DES-123-button-hover-states",
              "new stuff",
              "Feature_Button"
            ],
            correct: 1,
            explanation: "Good branch names: use prefixes (feature/, bugfix/, hotfix/), include ticket numbers, use kebab-case, and are descriptive. This enables automation and filtering."
          },
          {
            type: "quiz",
            question: "Why include ticket numbers (like DES-123) in branch names?",
            options: [
              "It looks professional",
              "Enables automatic linking between Git and project management tools",
              "Required by Git",
              "Makes branches longer"
            ],
            correct: 1,
            explanation: "Tools like Jira, Linear, and GitHub automatically link branches to issues when they contain ticket numbers. This creates traceability."
          },
          {
            type: "scenario",
            situation: "Your team wants to automatically deploy all branches starting with 'preview/' to a staging environment. What enables this?",
            options: [
              "Magic",
              "Branch name prefixes combined with CI/CD rules",
              "Manual deployment only",
              "GitHub Pages"
            ],
            correct: 1,
            explanation: "CI/CD pipelines can match branch patterns. Prefixes like 'preview/', 'release/', 'hotfix/' trigger different automated workflows."
          }
        ]
      },
      {
        id: "2-6",
        title: "Stashing: The Designer's Best Friend",
        story: "You're mid-work on button styles when a critical design review call starts. You need to switch to main quickly without committing half-done work.",
        concept: "Git Stash Deep Dive",
        difficulty: 3,
        xpReward: 170,
        challenges: [
          {
            type: "terminal",
            prompt: "Stash your current changes with a descriptive message",
            expectedCommand: "git stash push -m",
            hint: "git stash push -m \"WIP: button hover states\"",
            explanation: "'git stash push -m' lets you label your stash. Much better than the default 'WIP on branch...' when you have multiple stashes!"
          },
          {
            type: "quiz",
            question: "What's the difference between 'git stash pop' and 'git stash apply'?",
            options: [
              "pop is faster",
              "pop removes from stash list after applying; apply keeps it",
              "apply only works on same branch",
              "No difference"
            ],
            correct: 1,
            explanation: "'pop' applies and removes the stash. 'apply' keeps it in the stash list. Use apply when you might need to apply the same stash to multiple branches."
          },
          {
            type: "terminal",
            prompt: "List all your stashes",
            expectedCommand: "git stash list",
            hint: "git stash list",
            explanation: "Shows all stashes with their index (stash@{0}, stash@{1}, etc.) and messages. Oldest has highest number."
          },
          {
            type: "quiz",
            question: "You want to stash only specific files, not everything. How?",
            options: [
              "Not possible",
              "git stash push -p (patch mode)",
              "git stash --only",
              "Stage first, then stash"
            ],
            correct: 1,
            explanation: "'git stash push -p' enters interactive mode where you choose which changes to stash, similar to 'git add -p'. Very powerful for partial stashing!"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Collaboration & Pull Requests",
    subtitle: "Working effectively with engineering teams",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    description: "As a designer contributing to code, you'll spend a lot of time in pull requests. Master the art of code collaboration.",
    missions: [
      {
        id: "3-1",
        title: "Your First Pull Request",
        story: "Your button component is ready! Time to open a PR and get it reviewed by the engineering team.",
        concept: "PR Fundamentals",
        difficulty: 2,
        xpReward: 150,
        challenges: [
          {
            type: "terminal",
            prompt: "Push your feature branch to remote for the first time",
            expectedCommand: "git push -u origin",
            hint: "git push -u origin feature/button-variants",
            explanation: "-u (--set-upstream) creates the tracking relationship. After this, 'git push' and 'git pull' work without specifying the remote branch."
          },
          {
            type: "quiz",
            question: "What makes a good PR description?",
            options: [
              "As short as possible",
              "Context, what changed, screenshots for UI changes, and how to test",
              "Just the ticket number",
              "Commit messages are enough"
            ],
            correct: 1,
            explanation: "Good PR descriptions help reviewers understand context without reading all the code. For design work, screenshots/videos are invaluable!"
          },
          {
            type: "quiz",
            question: "Why should you request reviews from specific people rather than the whole team?",
            options: [
              "To blame them if something breaks",
              "Ensures expertise coverage and avoids bystander effect",
              "GitHub requires it",
              "It's faster"
            ],
            correct: 1,
            explanation: "Specific reviewers ensure the right expertise reviews the code. Too many reviewers leads to diffusion of responsibility (everyone assumes someone else will review)."
          }
        ]
      },
      {
        id: "3-2",
        title: "Responding to Review Comments",
        story: "The tech lead left 5 comments on your PR. Some need changes, some are questions. How do you handle this professionally?",
        concept: "Code Review Workflow",
        difficulty: 2,
        xpReward: 140,
        challenges: [
          {
            type: "scenario",
            situation: "A reviewer suggests a change you disagree with. What's the best approach?",
            options: [
              "Ignore it and mark as resolved",
              "Explain your reasoning, discuss, and find consensus",
              "Make the change anyway to get approval",
              "Close the PR"
            ],
            correct: 1,
            explanation: "Code review is a dialogue. Respectfully explaining your reasoning often leads to better solutions. Sometimes you're right, sometimes they are, sometimes you find a third option."
          },
          {
            type: "quiz",
            question: "You've addressed all review comments with new commits. What should you do?",
            options: [
              "Just wait for re-review",
              "Push changes and re-request review with a summary of changes",
              "Open a new PR",
              "Merge immediately"
            ],
            correct: 1,
            explanation: "Re-requesting review notifies reviewers. Adding a summary comment helps them quickly see what changed without re-reviewing everything."
          },
          {
            type: "quiz",
            question: "What does 'LGTM' mean in code reviews?",
            options: [
              "Let's Get This Merged",
              "Looks Good To Me (approval)",
              "Lots of Good Technical Methods",
              "Last Git To Main"
            ],
            correct: 1,
            explanation: "LGTM = 'Looks Good To Me' — informal approval. Other common ones: PTAL (Please Take Another Look), WIP (Work In Progress), NITS (minor issues)."
          }
        ]
      },
      {
        id: "3-3",
        title: "Forks & Upstream",
        story: "You want to contribute to an open-source design system. But you don't have write access to their repo. Enter: forking!",
        concept: "Fork Workflow",
        difficulty: 3,
        xpReward: 180,
        challenges: [
          {
            type: "quiz",
            question: "What's the difference between forking and cloning?",
            options: [
              "Same thing, different name",
              "Fork creates your own copy on GitHub; clone downloads to local",
              "Clone is for public repos only",
              "Fork is outdated"
            ],
            correct: 1,
            explanation: "Forking creates a server-side copy under your account. You then clone YOUR fork locally. This lets you contribute to repos you don't own."
          },
          {
            type: "terminal",
            prompt: "Add the original repository as a remote called 'upstream'",
            expectedCommand: "git remote add upstream",
            hint: "git remote add upstream https://github.com/original/repo.git",
            explanation: "The convention is: 'origin' = your fork, 'upstream' = original repo. This lets you pull updates from the original while pushing to your fork."
          },
          {
            type: "quiz",
            question: "Your fork is 20 commits behind upstream. How do you sync?",
            options: [
              "Delete and re-fork",
              "Fetch upstream, merge/rebase, push to origin",
              "Ask maintainers to update your fork",
              "Forks auto-sync"
            ],
            correct: 1,
            explanation: "Workflow: git fetch upstream → git merge upstream/main (or rebase) → git push origin main. This updates your fork with upstream changes."
          }
        ]
      },
      {
        id: "3-4",
        title: "Merge Conflicts: Don't Panic",
        story: "Your PR shows 'This branch has conflicts that must be resolved.' Don't worry — this is normal and fixable!",
        concept: "Resolving Conflicts",
        difficulty: 4,
        xpReward: 220,
        challenges: [
          {
            type: "quiz",
            question: "Merge conflicts occur when:",
            options: [
              "You have too many commits",
              "Two branches modified the same lines differently",
              "Your internet is slow",
              "Git is broken"
            ],
            correct: 1,
            explanation: "Conflicts happen when Git can't automatically determine which changes to keep. Same file, same lines, different changes = conflict. You must decide."
          },
          {
            type: "quiz",
            question: "What do these markers mean? <<<<<<< HEAD, =======, >>>>>>>",
            options: [
              "Error messages",
              "HEAD = your changes, ======= = separator, >>>>>>> = incoming changes",
              "Git comments",
              "Encryption markers"
            ],
            correct: 1,
            explanation: "Between <<<<<<< HEAD and ======= is your current branch's version. Between ======= and >>>>>>> is the incoming branch's version. Delete markers and keep what you want."
          },
          {
            type: "scenario",
            situation: "After resolving conflicts, what's the correct sequence?",
            options: [
              "Push immediately",
              "git add (resolved files) → git commit → git push",
              "git merge --continue",
              "Delete the branch"
            ],
            correct: 1,
            explanation: "After manually resolving conflicts in your editor, stage the resolved files with 'git add', then commit to complete the merge. The commit message auto-populates."
          },
          {
            type: "quiz",
            question: "You resolved conflicts wrong and want to start over. What command?",
            options: [
              "git conflict --reset",
              "git merge --abort",
              "git reset --conflicts",
              "Close the terminal"
            ],
            correct: 1,
            explanation: "'git merge --abort' cancels the merge and returns to pre-merge state. Similarly, 'git rebase --abort' cancels a rebase. Great escape hatch!"
          }
        ]
      },
      {
        id: "3-5",
        title: "Keeping PRs Clean",
        story: "Your PR has 47 commits including 'fix typo', 'oops', 'actually fix it this time'. The reviewer asks you to clean up the history.",
        concept: "Squashing & Clean History",
        difficulty: 4,
        xpReward: 200,
        challenges: [
          {
            type: "quiz",
            question: "What's the benefit of squashing commits before merging?",
            options: [
              "Faster merging",
              "Cleaner history with logical, atomic commits",
              "Required by GitHub",
              "Smaller repository size"
            ],
            correct: 1,
            explanation: "Squashing combines multiple small commits into one logical commit. The main branch history stays clean without 'fix typo' commits cluttering it."
          },
          {
            type: "quiz",
            question: "When should you NOT squash?",
            options: [
              "Always squash",
              "When individual commits tell an important story for future debugging",
              "On Mondays",
              "When there are conflicts"
            ],
            correct: 1,
            explanation: "Sometimes granular history is valuable. If each commit represents a logical step that might need individual reverting or bisecting later, keep them separate."
          },
          {
            type: "quiz",
            question: "GitHub's 'Squash and merge' button does what?",
            options: [
              "Squashes locally then merges",
              "Combines all PR commits into one and merges to target branch",
              "Same as regular merge",
              "Deletes the branch"
            ],
            correct: 1,
            explanation: "GitHub's Squash and merge creates a single commit on the target branch containing all PR changes. The original branch keeps its commits. Very convenient!"
          }
        ]
      },
      {
        id: "3-6",
        title: "Draft PRs & Early Feedback",
        story: "You want feedback on your approach before finishing the implementation. Let's learn about draft PRs and early collaboration.",
        concept: "Early Collaboration",
        difficulty: 2,
        xpReward: 130,
        challenges: [
          {
            type: "quiz",
            question: "When should you open a Draft PR?",
            options: [
              "Only when finished",
              "Early, to get feedback on direction and enable CI checks",
              "Never, drafts are useless",
              "Only for bug fixes"
            ],
            correct: 1,
            explanation: "Draft PRs let you get early feedback, run CI/CD pipelines, and show progress without requesting formal review. Converting to 'Ready for review' signals completion."
          },
          {
            type: "quiz",
            question: "What's a benefit of smaller, incremental PRs over large ones?",
            options: [
              "Less testing needed",
              "Easier to review, faster feedback, lower risk, simpler to revert",
              "GitHub prefers them",
              "They're faster to write"
            ],
            correct: 1,
            explanation: "Small PRs are reviewed more thoroughly (reviewers don't skim). They're also easier to understand, merge, and revert if needed. Aim for under 400 lines changed."
          },
          {
            type: "scenario",
            situation: "You're working on a large feature. How do you break it into smaller PRs?",
            options: [
              "Wait until it's all done",
              "Ship foundation first, then build on it with subsequent PRs",
              "Create multiple PRs with the same code",
              "Ask someone else to split it"
            ],
            correct: 1,
            explanation: "Feature breakdown: start with data/types, then API/logic, then UI. Each PR builds on the last. Use feature flags to hide incomplete UI from users."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Rewriting History",
    subtitle: "Amend, rebase, and squash like a pro",
    icon: RefreshCw,
    color: "from-orange-500 to-amber-600",
    description: "Git's ability to modify history is powerful but dangerous. Learn when and how to rewrite commits safely.",
    missions: [
      {
        id: "4-1",
        title: "Amending: Quick Fixes",
        story: "You just committed but noticed a typo in the CSS. Rather than a new 'fix typo' commit, let's amend!",
        concept: "Git Amend",
        difficulty: 2,
        xpReward: 130,
        challenges: [
          {
            type: "terminal",
            prompt: "Add a forgotten file and amend it into the last commit",
            expectedCommand: "git commit --amend",
            hint: "git add forgotten-file.css && git commit --amend --no-edit",
            explanation: "--amend replaces the last commit with a new one containing your staged changes. --no-edit keeps the same message."
          },
          {
            type: "quiz",
            question: "When is it safe to amend a commit?",
            options: [
              "Always safe",
              "Only before pushing (or on unshared branches)",
              "Only on main branch",
              "Never safe"
            ],
            correct: 1,
            explanation: "Amending rewrites history. If you've pushed, others might have based work on the original commit. Amending shared commits causes problems!"
          },
          {
            type: "terminal",
            prompt: "Change the last commit message to 'fix(button): correct hover state colors'",
            expectedCommand: "git commit --amend -m",
            hint: "git commit --amend -m \"fix(button): correct hover state colors\"",
            explanation: "--amend with -m lets you fix commit messages. Great for typos or making messages conform to conventions."
          }
        ]
      },
      {
        id: "4-2",
        title: "Interactive Rebase: History Surgery",
        story: "Your feature branch has 10 commits. Before the PR, you want to reorganize: squash some, reword others, maybe drop a debug commit.",
        concept: "Interactive Rebase",
        difficulty: 5,
        xpReward: 280,
        challenges: [
          {
            type: "terminal",
            prompt: "Start an interactive rebase for the last 5 commits",
            expectedCommand: "git rebase -i HEAD~5",
            hint: "git rebase -i HEAD~5",
            explanation: "-i flag opens an editor with the last 5 commits. You can then reorder, squash, edit, reword, or drop commits."
          },
          {
            type: "quiz",
            question: "In interactive rebase, what does 'squash' (or 's') do?",
            options: [
              "Delete the commit",
              "Combine with previous commit, merge commit messages",
              "Make the commit smaller",
              "Skip the commit"
            ],
            correct: 1,
            explanation: "'squash' melds the commit into the one above it (previous). You'll get to edit the combined commit message. 'fixup' (f) is similar but discards the message."
          },
          {
            type: "quiz",
            question: "What does 'reword' (or 'r') do in interactive rebase?",
            options: [
              "Delete and recreate the commit",
              "Keep changes but edit the commit message",
              "Rename the branch",
              "Add more changes"
            ],
            correct: 1,
            explanation: "'reword' lets you change the commit message without touching the actual changes. It opens your editor for just that commit's message."
          },
          {
            type: "scenario",
            situation: "Interactive rebase shows commits oldest→newest (top→bottom). To squash commit 3 into commit 2, you should:",
            options: [
              "Put 'squash' on commit 2",
              "Put 'squash' on commit 3",
              "Put 'squash' on both",
              "Reorder them first"
            ],
            correct: 1,
            explanation: "Squash combines UP. Mark the newer commit (3) with squash, and it will be melded into the commit above it (2). The order matters!"
          }
        ]
      },
      {
        id: "4-3",
        title: "Rebase vs Merge: The Great Debate",
        story: "The team is split: some prefer rebasing, others merging. Let's understand both and when to use each.",
        concept: "Rebase Fundamentals",
        difficulty: 4,
        xpReward: 200,
        challenges: [
          {
            type: "quiz",
            question: "What does 'git rebase main' do when on a feature branch?",
            options: [
              "Merges main into feature",
              "Replays feature commits on top of main (rewriting history)",
              "Deletes main",
              "Creates a merge commit"
            ],
            correct: 1,
            explanation: "Rebase 'picks up' your branch and 'replants' it at the tip of main. Your commits get new hashes. History becomes linear with no merge commits."
          },
          {
            type: "quiz",
            question: "Why do some teams prohibit rebasing on shared branches?",
            options: [
              "It's slower",
              "It rewrites history, causing problems for others who pulled the old commits",
              "It doesn't work with GitHub",
              "Personal preference only"
            ],
            correct: 1,
            explanation: "Rebase changes commit hashes. If others have those commits, their history diverges from yours, causing confusion and merge problems. Never rebase shared history!"
          },
          {
            type: "scenario",
            situation: "When is rebasing the right choice?",
            options: [
              "On the main branch",
              "On your local feature branch before merging to keep history clean",
              "After pushing to a shared branch",
              "During code freeze"
            ],
            correct: 1,
            explanation: "Rebasing is great for cleaning up local work before sharing. It creates a linear history. But once pushed to a shared branch, prefer merging."
          }
        ]
      },
      {
        id: "4-4",
        title: "Recovering from Rebase Gone Wrong",
        story: "Your rebase went badly — conflicts everywhere and you made a mistake resolving them. Don't worry, Git has escape hatches!",
        concept: "Rebase Recovery",
        difficulty: 4,
        xpReward: 210,
        challenges: [
          {
            type: "terminal",
            prompt: "Cancel the current rebase and return to the pre-rebase state",
            expectedCommand: "git rebase --abort",
            hint: "git rebase --abort",
            explanation: "--abort cancels the rebase entirely, restoring your branch to exactly how it was before you started. It's a safe escape hatch."
          },
          {
            type: "quiz",
            question: "During a rebase, Git pauses on conflicts. After fixing them, what continues the rebase?",
            options: [
              "git rebase --next",
              "git rebase --continue",
              "git commit",
              "git push"
            ],
            correct: 1,
            explanation: "After resolving conflicts (and staging with git add), 'git rebase --continue' applies your resolution and moves to the next commit."
          },
          {
            type: "quiz",
            question: "You want to skip a problematic commit entirely during rebase. Command?",
            options: [
              "git rebase --skip",
              "git rebase --ignore",
              "git rebase --drop",
              "Delete the file"
            ],
            correct: 0,
            explanation: "'git rebase --skip' drops the current commit and continues. Useful if a commit became empty after conflict resolution or is no longer needed."
          }
        ]
      },
      {
        id: "4-5",
        title: "Fixup Commits: Pro Workflow",
        story: "Here's a pro trick: create commits that automatically squash into previous ones during rebase.",
        concept: "Fixup & Autosquash",
        difficulty: 5,
        xpReward: 250,
        challenges: [
          {
            type: "terminal",
            prompt: "Create a fixup commit targeting a previous commit",
            expectedCommand: "git commit --fixup",
            hint: "git commit --fixup=abc123 (where abc123 is the commit hash to fix)",
            explanation: "--fixup creates a commit with message 'fixup! Original message'. During 'git rebase -i --autosquash', it automatically squashes into the target commit."
          },
          {
            type: "quiz",
            question: "What does 'git rebase -i --autosquash' do with fixup! commits?",
            options: [
              "Deletes them",
              "Automatically reorders and marks them for squashing",
              "Nothing special",
              "Renames them"
            ],
            correct: 1,
            explanation: "--autosquash moves fixup! and squash! commits directly after their targets and marks them appropriately. Huge time saver for cleaning history!"
          },
          {
            type: "quiz",
            question: "What's the difference between --fixup and --squash?",
            options: [
              "Same thing",
              "--fixup discards the message; --squash combines messages",
              "--squash is faster",
              "--fixup is deprecated"
            ],
            correct: 1,
            explanation: "'--fixup' commits get discarded during autosquash (silent fix). '--squash' commits get combined (you edit the merged message). Use fixup for typo fixes, squash for meaningful additions."
          }
        ]
      },
      {
        id: "4-6",
        title: "Cherry-Pick: Surgical Commits",
        story: "The designer on the mobile team made a perfect animation timing fix. You want just that one commit in your branch, not their whole branch.",
        concept: "Cherry-Picking",
        difficulty: 3,
        xpReward: 180,
        challenges: [
          {
            type: "terminal",
            prompt: "Apply a specific commit (abc123) to your current branch",
            expectedCommand: "git cherry-pick",
            hint: "git cherry-pick abc123",
            explanation: "Cherry-pick copies a commit from anywhere in the repo and applies it to your current branch. It creates a new commit with a new hash."
          },
          {
            type: "quiz",
            question: "When is cherry-picking the right approach?",
            options: [
              "Always, instead of merging",
              "For applying specific fixes across branches without full merging",
              "Never, it's outdated",
              "Only for main branch"
            ],
            correct: 1,
            explanation: "Cherry-pick is perfect for: backporting fixes to release branches, grabbing specific commits from long-running branches, or rescuing commits from abandoned branches."
          },
          {
            type: "quiz",
            question: "Cherry-picking a commit that already exists in your branch's history will:",
            options: [
              "Create a duplicate commit",
              "Fail or create conflicts",
              "Delete the original",
              "Merge automatically"
            ],
            correct: 1,
            explanation: "If the changes already exist, cherry-pick either fails or creates empty/conflicting commits. Use 'git cherry-pick --skip' or check if the commit is already in your history."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Recovery & Troubleshooting",
    subtitle: "When things go wrong (and they will)",
    icon: Zap,
    color: "from-red-500 to-rose-600",
    description: "Git never truly loses data. Learn the recovery tools that can save your work in almost any situation.",
    missions: [
      {
        id: "5-1",
        title: "The Reflog: Git's Safety Net",
        story: "You just did 'git reset --hard' and lost commits. Everyone thinks they're gone forever. But Git has a secret history...",
        concept: "Understanding Reflog",
        difficulty: 4,
        xpReward: 220,
        challenges: [
          {
            type: "terminal",
            prompt: "View the reference log of HEAD",
            expectedCommand: "git reflog",
            hint: "git reflog",
            explanation: "Reflog records every time HEAD changes: commits, checkouts, rebases, resets. Even 'lost' commits appear here for about 90 days!"
          },
          {
            type: "quiz",
            question: "Reflog shows 'HEAD@{5}: commit: important work'. How do you recover it?",
            options: [
              "git recover HEAD@{5}",
              "git checkout HEAD@{5} or git reset HEAD@{5}",
              "It's not recoverable",
              "Contact GitHub support"
            ],
            correct: 1,
            explanation: "HEAD@{5} is a valid reference! You can checkout (detached HEAD), reset to it, or cherry-pick it. The commit still exists until garbage collection."
          },
          {
            type: "quiz",
            question: "How long does Git typically keep reflog entries?",
            options: [
              "Forever",
              "90 days (default, configurable)",
              "24 hours",
              "Until you push"
            ],
            correct: 1,
            explanation: "By default, reflog entries expire after 90 days. Unreachable commits are then eligible for garbage collection. This is your recovery window!"
          }
        ]
      },
      {
        id: "5-2",
        title: "Reset Demystified",
        story: "Everyone knows 'git reset' but few understand its three modes. Let's master them all.",
        concept: "Git Reset Modes",
        difficulty: 4,
        xpReward: 200,
        challenges: [
          {
            type: "quiz",
            question: "What does 'git reset --soft HEAD~1' do?",
            options: [
              "Deletes the last commit and its changes",
              "Moves HEAD back, keeps changes staged",
              "Only changes the commit message",
              "Creates a backup"
            ],
            correct: 1,
            explanation: "--soft moves HEAD but keeps all changes staged. Perfect for 'uncommitting' to fix something and recommit. No work is lost!"
          },
          {
            type: "quiz",
            question: "What does 'git reset --mixed HEAD~1' (the default) do?",
            options: [
              "Deletes everything",
              "Moves HEAD, unstages changes but keeps them in working directory",
              "Same as --soft",
              "Only works on merged commits"
            ],
            correct: 1,
            explanation: "--mixed (default) uncommits AND unstages, but files remain modified in your working directory. You can then selectively re-add and recommit."
          },
          {
            type: "quiz",
            question: "'git reset --hard HEAD~1' is dangerous because:",
            options: [
              "It corrupts the repository",
              "It discards uncommitted changes permanently (unless in reflog)",
              "It can't be undone",
              "It deletes branches"
            ],
            correct: 1,
            explanation: "--hard discards working directory changes too! Committed work can be recovered via reflog, but uncommitted changes are lost forever. Be careful!"
          },
          {
            type: "scenario",
            situation: "You want to undo the last commit but keep editing the files. Which reset?",
            options: [
              "git reset --hard HEAD~1",
              "git reset --soft HEAD~1",
              "git reset --mixed HEAD~1",
              "git revert HEAD"
            ],
            correct: 2,
            explanation: "--mixed (or just 'git reset HEAD~1') is ideal. Changes stay in your working directory, unstaged. You can modify and recommit at your leisure."
          }
        ]
      },
      {
        id: "5-3",
        title: "Revert: Safe Undo",
        story: "A commit on main is causing bugs in production. You can't reset (shared branch!) but you can revert.",
        concept: "Git Revert",
        difficulty: 3,
        xpReward: 170,
        challenges: [
          {
            type: "terminal",
            prompt: "Create a new commit that undoes the changes of abc123",
            expectedCommand: "git revert",
            hint: "git revert abc123",
            explanation: "Revert creates a NEW commit that applies the inverse of the target commit. History is preserved, safe for shared branches!"
          },
          {
            type: "quiz",
            question: "Why use revert instead of reset on shared branches?",
            options: [
              "Revert is faster",
              "Revert adds new history instead of rewriting, preventing collaboration issues",
              "Reset doesn't work on shared branches",
              "Personal preference"
            ],
            correct: 1,
            explanation: "Revert is additive (new commit), reset is destructive (rewrites history). On shared branches, teammates have the original commits. Rewriting causes divergence hell."
          },
          {
            type: "quiz",
            question: "How do you revert a merge commit?",
            options: [
              "Same as regular: git revert <hash>",
              "git revert -m 1 <hash> (specify which parent to keep)",
              "Merge commits can't be reverted",
              "git unmerge <hash>"
            ],
            correct: 1,
            explanation: "Merge commits have two parents. -m 1 keeps the first parent (usually main), -m 2 keeps the second (the merged branch). You must specify!"
          }
        ]
      },
      {
        id: "5-4",
        title: "Git Bisect: Finding the Bug",
        story: "The design system broke somewhere in the last 50 commits. Manually checking each would take hours. Let's do binary search!",
        concept: "Git Bisect",
        difficulty: 5,
        xpReward: 260,
        challenges: [
          {
            type: "terminal",
            prompt: "Start a bisect session",
            expectedCommand: "git bisect start",
            hint: "git bisect start",
            explanation: "Bisect uses binary search to find which commit introduced a bug. You mark commits as good or bad, and Git narrows down efficiently."
          },
          {
            type: "quiz",
            question: "After 'git bisect start', what's the next step?",
            options: [
              "git bisect run",
              "Mark a known bad commit (current) and a known good commit",
              "git bisect auto",
              "Push to remote"
            ],
            correct: 1,
            explanation: "You need to give bisect boundaries: 'git bisect bad' (current is broken) and 'git bisect good abc123' (this older commit works). Git then checks out the midpoint."
          },
          {
            type: "quiz",
            question: "Git checks out a commit during bisect. You test and it's broken. What do you type?",
            options: [
              "git bisect broken",
              "git bisect bad",
              "git bisect fail",
              "git bisect next"
            ],
            correct: 1,
            explanation: "'git bisect bad' marks current as broken. Git then checks out an earlier commit (binary search). 'git bisect good' if it works. Continue until found!"
          },
          {
            type: "terminal",
            prompt: "Finish bisect and return to your original branch",
            expectedCommand: "git bisect reset",
            hint: "git bisect reset",
            explanation: "Always reset when done! It returns you to where you started and cleans up bisect state. Don't forget this step."
          }
        ]
      },
      {
        id: "5-5",
        title: "The Detached HEAD State",
        story: "Git says 'You are in detached HEAD state.' What does that even mean? Is it bad?",
        concept: "Detached HEAD",
        difficulty: 3,
        xpReward: 160,
        challenges: [
          {
            type: "quiz",
            question: "What causes a detached HEAD state?",
            options: [
              "A bug in Git",
              "Checking out a commit directly instead of a branch",
              "Having too many branches",
              "Network issues"
            ],
            correct: 1,
            explanation: "HEAD normally points to a branch (which points to a commit). Detached HEAD means HEAD points directly to a commit. You're not on any branch!"
          },
          {
            type: "quiz",
            question: "Is it dangerous to be in detached HEAD?",
            options: [
              "Yes, you'll lose all data",
              "No, but commits you make won't belong to any branch",
              "Yes, you must restart Git",
              "No, it's exactly the same as normal"
            ],
            correct: 1,
            explanation: "You can safely look around in detached HEAD. The risk: if you commit, those commits are orphaned when you checkout a branch (but recoverable via reflog)."
          },
          {
            type: "scenario",
            situation: "You made commits in detached HEAD and want to keep them. What do you do?",
            options: [
              "They're lost forever",
              "Create a branch from your current position: git checkout -b new-branch",
              "git attach HEAD",
              "Email the commits to yourself"
            ],
            correct: 1,
            explanation: "Creating a branch at your current position 'captures' those commits. They now belong to the new branch and won't be orphaned."
          }
        ]
      },
      {
        id: "5-6",
        title: "Nuclear Options & Recovery",
        story: "Sometimes you need the big guns. Let's learn about fsck, gc, and recovering truly lost objects.",
        concept: "Low-Level Recovery",
        difficulty: 5,
        xpReward: 280,
        challenges: [
          {
            type: "quiz",
            question: "What does 'git fsck' do?",
            options: [
              "Checks disk space",
              "Verifies repository integrity and finds dangling objects",
              "Fixes merge conflicts",
              "Syncs with remote"
            ],
            correct: 1,
            explanation: "'git fsck' (file system check) verifies object integrity and lists dangling/unreachable objects. These are commits not connected to any branch — potential recovery targets!"
          },
          {
            type: "quiz",
            question: "What is a 'dangling commit'?",
            options: [
              "A commit with errors",
              "A commit not reachable from any branch or tag",
              "A commit that's too old",
              "A commit without a message"
            ],
            correct: 1,
            explanation: "Dangling commits exist in the object database but aren't in any branch's history. They result from rebases, resets, or deleted branches. Recoverable until garbage collection!"
          },
          {
            type: "quiz",
            question: "'git gc' (garbage collection) does what?",
            options: [
              "Deletes all branches",
              "Compresses objects and removes unreachable ones (after expiry)",
              "Clears your terminal",
              "Resets the repository"
            ],
            correct: 1,
            explanation: "'git gc' cleans up: packs loose objects, removes truly unreachable objects (past reflog expiry). Usually runs automatically. After gc, dangling objects may be unrecoverable."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Git Internals",
    subtitle: "Understanding how Git actually works",
    icon: Database,
    color: "from-violet-500 to-purple-600",
    description: "To truly master Git, you need to understand its internal model. This knowledge transforms confusing commands into logical operations.",
    missions: [
      {
        id: "6-1",
        title: "The Object Model",
        story: "Git is fundamentally a content-addressed filesystem. Everything is an object with a SHA-1 hash. Let's explore!",
        concept: "Git Objects",
        difficulty: 4,
        xpReward: 200,
        challenges: [
          {
            type: "quiz",
            question: "What are the four types of Git objects?",
            options: [
              "file, folder, branch, commit",
              "blob, tree, commit, tag",
              "add, commit, push, pull",
              "local, remote, origin, upstream"
            ],
            correct: 1,
            explanation: "Blob = file content, Tree = directory listing, Commit = snapshot + metadata, Tag = named reference to commit. Everything else is built on these!"
          },
          {
            type: "quiz",
            question: "A 'blob' in Git stores:",
            options: [
              "File name and content",
              "Only file content (no name!)",
              "Commit messages",
              "Branch information"
            ],
            correct: 1,
            explanation: "Blobs store ONLY content, not filenames! The same content in two different files = one blob. Trees map names to blobs. This enables efficient deduplication."
          },
          {
            type: "terminal",
            prompt: "View the type of a Git object",
            expectedCommand: "git cat-file -t",
            hint: "git cat-file -t abc123",
            explanation: "'git cat-file -t' shows object type (blob/tree/commit/tag). '-p' pretty-prints content. These plumbing commands reveal Git's internals!"
          }
        ]
      },
      {
        id: "6-2",
        title: "Trees & Commits",
        story: "Understanding how commits point to trees, and trees point to blobs, unlocks Git's elegance.",
        concept: "Object Relationships",
        difficulty: 4,
        xpReward: 210,
        challenges: [
          {
            type: "quiz",
            question: "A commit object contains:",
            options: [
              "All file contents",
              "Pointer to tree, parent commit(s), author, committer, message",
              "Just the diff from parent",
              "List of changed files"
            ],
            correct: 1,
            explanation: "Commits are lightweight! They point to a tree (full snapshot), parent commit(s), and metadata. They DON'T store diffs — Git computes diffs on demand."
          },
          {
            type: "quiz",
            question: "How does Git store file changes efficiently if each commit has a full snapshot?",
            options: [
              "It doesn't, Git is inefficient",
              "Packfiles compress similar objects together, storing deltas",
              "It deletes old commits",
              "Cloud storage"
            ],
            correct: 1,
            explanation: "Git periodically runs 'gc' which creates packfiles. These store objects as deltas against similar objects. Brilliant compression while maintaining snapshot model!"
          },
          {
            type: "terminal",
            prompt: "View the tree that a commit points to",
            expectedCommand: "git cat-file -p",
            hint: "git cat-file -p HEAD^{tree}",
            explanation: "HEAD^{tree} dereferences HEAD to its tree. You'll see entries like '100644 blob abc123 README.md' — mode, type, hash, name."
          }
        ]
      },
      {
        id: "6-3",
        title: "References & HEAD",
        story: "Branches, tags, HEAD — they're all just references to commits. Understanding refs demystifies Git navigation.",
        concept: "Git References",
        difficulty: 3,
        xpReward: 180,
        challenges: [
          {
            type: "quiz",
            question: "A branch in Git is technically:",
            options: [
              "A copy of the repository",
              "A text file containing a commit hash",
              "A separate folder",
              "A remote connection"
            ],
            correct: 1,
            explanation: "A branch is just a 40-character file in .git/refs/heads/! When you commit, Git updates this file to the new commit hash. Branches are incredibly lightweight."
          },
          {
            type: "quiz",
            question: "What's stored in .git/HEAD?",
            options: [
              "The latest commit hash",
              "Usually 'ref: refs/heads/branchname' (or a commit hash if detached)",
              "Your username",
              "Remote URL"
            ],
            correct: 1,
            explanation: "HEAD is usually a symbolic reference pointing to a branch. When detached, it contains a commit hash directly. This is how Git knows your current position!"
          },
          {
            type: "terminal",
            prompt: "List all references in the repository",
            expectedCommand: "git show-ref",
            hint: "git show-ref",
            explanation: "show-ref lists all refs with their commit hashes. You'll see heads (branches), remotes, and tags. It's a map of your repository's named points."
          }
        ]
      },
      {
        id: "6-4",
        title: "The Index (Staging Area)",
        story: "The staging area isn't a place — it's a file called 'index'. Let's understand this crucial component.",
        concept: "The Index File",
        difficulty: 4,
        xpReward: 190,
        challenges: [
          {
            type: "quiz",
            question: "The Git index (staging area) is:",
            options: [
              "A temporary folder",
              "A binary file tracking what will go in the next commit",
              "Part of GitHub",
              "The same as .gitignore"
            ],
            correct: 1,
            explanation: "The index (.git/index) is a binary file listing all tracked files with their hashes and metadata. 'git add' updates this file. 'git commit' creates a tree from it."
          },
          {
            type: "quiz",
            question: "Git has three 'trees': Working Directory, Index, and HEAD. What does 'git add' do?",
            options: [
              "Copies from HEAD to Working Directory",
              "Copies from Working Directory to Index",
              "Copies from Index to HEAD",
              "Pushes to remote"
            ],
            correct: 1,
            explanation: "'git add' stages changes: Working Directory → Index. 'git commit' snapshots: Index → new commit (updates HEAD). 'git checkout' goes: HEAD → Index → Working Directory."
          },
          {
            type: "terminal",
            prompt: "View what's currently in the index",
            expectedCommand: "git ls-files",
            hint: "git ls-files -s (shows staged files with hashes)",
            explanation: "'git ls-files' lists indexed files. '-s' shows mode, hash, stage number, and path. This is the 'source of truth' for your next commit."
          }
        ]
      },
      {
        id: "6-5",
        title: "Merge Mechanics",
        story: "Git's three-way merge algorithm is elegant. Understanding it makes conflict resolution intuitive.",
        concept: "How Merge Works",
        difficulty: 5,
        xpReward: 240,
        challenges: [
          {
            type: "quiz",
            question: "In a three-way merge, what's the 'merge base'?",
            options: [
              "The main branch",
              "The common ancestor of the two branches being merged",
              "The resulting commit",
              "The remote repository"
            ],
            correct: 1,
            explanation: "Git finds the best common ancestor (merge base) and compares both branches to it. If only one side changed a section, that change wins. If both changed, conflict!"
          },
          {
            type: "quiz",
            question: "A 'fast-forward' merge happens when:",
            options: [
              "Your internet is fast",
              "The target branch is directly ahead (no divergence), so HEAD just moves forward",
              "You use the -f flag",
              "Merging to main only"
            ],
            correct: 1,
            explanation: "If branch A is an ancestor of branch B, merging B into A just moves A's pointer forward. No merge commit needed. This is the simplest merge type."
          },
          {
            type: "quiz",
            question: "The command 'git merge --no-ff feature' forces:",
            options: [
              "No fast-forward: always create a merge commit",
              "No files to be changed",
              "No conflicts",
              "Merge to fail"
            ],
            correct: 0,
            explanation: "--no-ff creates a merge commit even when fast-forward is possible. This preserves branch history — you can see that work happened on a feature branch."
          }
        ]
      },
      {
        id: "6-6",
        title: "Transfer Protocols",
        story: "When you push or pull, how does Git transfer data? Understanding protocols helps troubleshoot remote issues.",
        concept: "Git Transfer",
        difficulty: 4,
        xpReward: 200,
        challenges: [
          {
            type: "quiz",
            question: "Git supports multiple protocols. Which is most common for GitHub?",
            options: [
              "FTP",
              "HTTPS or SSH",
              "BitTorrent",
              "Email"
            ],
            correct: 1,
            explanation: "HTTPS (with tokens/passwords) and SSH (with keys) are standard. HTTPS is easier to set up, SSH is more secure and convenient once configured."
          },
          {
            type: "quiz",
            question: "During 'git fetch', what actually transfers?",
            options: [
              "Only changed files",
              "Objects the remote has that you don't (commits, trees, blobs)",
              "The entire repository every time",
              "Only branch names"
            ],
            correct: 1,
            explanation: "Git is smart — it only transfers objects you're missing. It uses packfile negotiation to minimize transfer. This is why fetching is usually fast!"
          },
          {
            type: "quiz",
            question: "What's a 'shallow clone'?",
            options: [
              "A clone with only some branches",
              "A clone with limited history depth (e.g., last 10 commits)",
              "A clone without .git folder",
              "A faster clone that's incomplete"
            ],
            correct: 1,
            explanation: "'git clone --depth=1' creates a shallow clone with only recent history. Great for CI/CD where you don't need full history. Reduces clone time and disk space."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Advanced Workflows",
    subtitle: "Submodules, monorepos, and CI/CD",
    icon: Layers,
    color: "from-teal-500 to-cyan-600",
    description: "Enterprise-scale Git requires advanced techniques. Learn to manage complex multi-repository setups and automate your workflows.",
    missions: [
      {
        id: "7-1",
        title: "Git Submodules",
        story: "The design system repo needs to include an external icon library. You want to keep it in sync but separate. Enter submodules!",
        concept: "Submodule Basics",
        difficulty: 4,
        xpReward: 220,
        challenges: [
          {
            type: "terminal",
            prompt: "Add a submodule for the icons repository",
            expectedCommand: "git submodule add",
            hint: "git submodule add https://github.com/designflow/icons.git libs/icons",
            explanation: "Submodules are pointers to specific commits in other repos. They're stored as a reference, not copied. Great for shared dependencies."
          },
          {
            type: "quiz",
            question: "After cloning a repo with submodules, the submodule folders are empty. Why?",
            options: [
              "Bug in Git",
              "Submodules aren't fetched automatically — run 'git submodule update --init'",
              "Submodules don't work with clone",
              "You need special permissions"
            ],
            correct: 1,
            explanation: "By design, submodules need explicit initialization. Use 'git clone --recursive' or 'git submodule update --init --recursive' after cloning."
          },
          {
            type: "quiz",
            question: "A submodule is 'pinned' to:",
            options: [
              "The main branch",
              "A specific commit hash",
              "The latest version always",
              "A version number"
            ],
            correct: 1,
            explanation: "Submodules reference exact commits, not branches. To update, you cd into the submodule, pull, then commit the parent repo with the new reference."
          }
        ]
      },
      {
        id: "7-2",
        title: "Monorepo Strategies",
        story: "DesignFlow is considering a monorepo: web, mobile, and design-system in one repository. Let's understand the tradeoffs.",
        concept: "Monorepo Patterns",
        difficulty: 4,
        xpReward: 210,
        challenges: [
          {
            type: "quiz",
            question: "What's a key advantage of monorepos?",
            options: [
              "Smaller repository size",
              "Atomic changes across multiple projects, easier code sharing",
              "Faster git operations",
              "Simpler permissions"
            ],
            correct: 1,
            explanation: "Monorepos enable atomic commits across projects (change API + client together), easy code sharing, and unified tooling. Big companies like Google use them."
          },
          {
            type: "quiz",
            question: "What's a key challenge of monorepos?",
            options: [
              "Can't use branches",
              "Scale: large history, many files, complex CI/CD, broad permissions",
              "GitHub doesn't support them",
              "Can't have multiple languages"
            ],
            correct: 1,
            explanation: "At scale, monorepos need special tooling: sparse checkouts, partial clones, fine-grained CI triggers, careful access control. It's an investment."
          },
          {
            type: "quiz",
            question: "What's 'sparse checkout' useful for in monorepos?",
            options: [
              "Faster pushing",
              "Checking out only specific directories you need",
              "Deleting old commits",
              "Merging faster"
            ],
            correct: 1,
            explanation: "Sparse checkout lets you work with only part of the repo in your working directory. Essential for huge monorepos where you don't need every project locally."
          }
        ]
      },
      {
        id: "7-3",
        title: "Git Hooks: Automation",
        story: "Let's automate quality checks! Hooks can run scripts before commits, pushes, and other Git events.",
        concept: "Git Hooks",
        difficulty: 3,
        xpReward: 180,
        challenges: [
          {
            type: "quiz",
            question: "Where are Git hooks stored?",
            options: [
              "~/.gitconfig",
              ".git/hooks/ directory",
              "GitHub settings",
              "package.json"
            ],
            correct: 1,
            explanation: "Hooks are executable scripts in .git/hooks/. They're named by event: pre-commit, pre-push, post-merge, etc. Remove .sample extension to activate."
          },
          {
            type: "quiz",
            question: "A pre-commit hook that exits with non-zero status will:",
            options: [
              "Show a warning but continue",
              "Prevent the commit from happening",
              "Create a failed commit",
              "Nothing, hooks are informational"
            ],
            correct: 1,
            explanation: "Non-zero exit = failure = operation blocked. This is how hooks enforce standards: run linter, if it fails, prevent commit. Quality gates!"
          },
          {
            type: "quiz",
            question: "Hooks in .git/hooks/ aren't committed to the repo. How do you share them with the team?",
            options: [
              "You can't share hooks",
              "Store in a tracked folder (e.g., .githooks/) and configure core.hooksPath",
              "Email them to everyone",
              "Use GitHub Actions only"
            ],
            correct: 1,
            explanation: "'git config core.hooksPath .githooks' tells Git to use a different hooks directory. Commit that directory, document the config command, or automate it in package setup."
          }
        ]
      },
      {
        id: "7-4",
        title: "CI/CD Integration",
        story: "Your design system has a pipeline: lint, test, build, deploy. Understanding Git's role in CI/CD is crucial.",
        concept: "Git in CI/CD",
        difficulty: 3,
        xpReward: 190,
        challenges: [
          {
            type: "quiz",
            question: "GitHub Actions workflows are triggered by:",
            options: [
              "Manual clicks only",
              "Git events like push, pull_request, tags, schedules",
              "Email",
              "Slack messages"
            ],
            correct: 1,
            explanation: "CI/CD pipelines react to Git events. Push to main? Deploy. Open PR? Run tests. Create tag? Publish release. Git events drive automation."
          },
          {
            type: "quiz",
            question: "What does 'CI' enforce that relates to Git workflow?",
            options: [
              "Everyone uses the same editor",
              "Integration of changes frequently with automated verification",
              "Commit messages are perfect",
              "All branches are named correctly"
            ],
            correct: 1,
            explanation: "Continuous Integration means integrating (merging) work frequently and verifying each integration automatically. Short-lived branches + automated tests = CI."
          },
          {
            type: "scenario",
            situation: "Your CI runs on every push. A bad commit breaks tests on main. How do you minimize this risk?",
            options: [
              "Turn off CI",
              "Require CI to pass on PR branches before merging (branch protection)",
              "Test manually before pushing",
              "Have fewer tests"
            ],
            correct: 1,
            explanation: "Branch protection rules can require: CI passes, reviews approved, up-to-date with main. This prevents broken code from reaching main in the first place."
          }
        ]
      },
      {
        id: "7-5",
        title: "Release Tagging",
        story: "Version 2.0 of the design system is ready! Let's learn proper release tagging.",
        concept: "Tags & Releases",
        difficulty: 2,
        xpReward: 150,
        challenges: [
          {
            type: "terminal",
            prompt: "Create an annotated tag for version 2.0.0",
            expectedCommand: "git tag -a v2.0.0",
            hint: "git tag -a v2.0.0 -m \"Version 2.0.0 - Dark mode support\"",
            explanation: "-a creates an annotated tag (recommended for releases). It stores tagger, date, message. Lightweight tags (without -a) are just pointers."
          },
          {
            type: "quiz",
            question: "Tags don't push with 'git push' by default. How do you push tags?",
            options: [
              "Tags push automatically",
              "git push --tags or git push origin v2.0.0",
              "git publish tags",
              "Tags are local only"
            ],
            correct: 1,
            explanation: "'git push --tags' pushes all tags. 'git push origin v2.0.0' pushes specific tag. This is by design — tags are often created after the fact."
          },
          {
            type: "quiz",
            question: "Semantic versioning: v2.0.0 → v2.1.0 indicates:",
            options: [
              "Breaking changes",
              "New features, backward compatible",
              "Bug fixes only",
              "Documentation update"
            ],
            correct: 1,
            explanation: "Semver: MAJOR.MINOR.PATCH. Major = breaking, Minor = new features (backward compatible), Patch = bug fixes. v2.0.0 → v2.1.0 = new features added."
          }
        ]
      },
      {
        id: "7-6",
        title: "Git Worktrees",
        story: "You need to work on a hotfix while keeping your feature branch work intact. Worktrees let you have multiple working directories!",
        concept: "Git Worktrees",
        difficulty: 4,
        xpReward: 200,
        challenges: [
          {
            type: "terminal",
            prompt: "Create a new worktree for the hotfix branch",
            expectedCommand: "git worktree add",
            hint: "git worktree add ../hotfix-work hotfix/urgent-fix",
            explanation: "Worktrees create additional working directories linked to the same repo. Each can have a different branch checked out. No need to stash or commit WIP!"
          },
          {
            type: "quiz",
            question: "How is a worktree different from cloning the repo again?",
            options: [
              "No difference",
              "Worktrees share the same .git data — changes in one are immediately visible to others",
              "Worktrees are faster to create",
              "Clones can have multiple branches"
            ],
            correct: 1,
            explanation: "Worktrees share the Git database. Commit in one, it's instantly visible in others. No syncing needed. Much more efficient than multiple clones!"
          },
          {
            type: "terminal",
            prompt: "List all worktrees",
            expectedCommand: "git worktree list",
            hint: "git worktree list",
            explanation: "Shows all worktrees with their paths and checked-out branches. Use 'git worktree remove <path>' to clean up when done."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Security & Best Practices",
    subtitle: "Keeping your code and secrets safe",
    icon: Shield,
    color: "from-rose-500 to-red-600",
    description: "Git security is critical. Learn to protect secrets, sign commits, and follow enterprise-grade practices.",
    missions: [
      {
        id: "8-1",
        title: "The Secrets Disaster",
        story: "INCIDENT: Someone committed the .env file with API keys. Even after deleting, it's in Git history. How do we handle this?",
        concept: "Secrets in Git",
        difficulty: 4,
        xpReward: 230,
        challenges: [
          {
            type: "quiz",
            question: "You deleted a file with secrets and committed. Is it gone from Git?",
            options: [
              "Yes, deleted means gone",
              "No, it exists in history forever unless you rewrite history",
              "Yes, after 30 days",
              "Yes, after pushing"
            ],
            correct: 1,
            explanation: "Git never forgets! Deleted files remain in commits. Anyone with repo access can see historical content. Secrets in history = compromised secrets."
          },
          {
            type: "quiz",
            question: "What's the FIRST thing to do after discovering committed secrets?",
            options: [
              "Delete the file",
              "Rotate/revoke the compromised credentials IMMEDIATELY",
              "Run git filter-branch",
              "Contact GitHub support"
            ],
            correct: 1,
            explanation: "Assume the secret is compromised! Rotate it FIRST. Then clean history. The secret may already be scraped by bots that watch GitHub for accidental leaks."
          },
          {
            type: "quiz",
            question: "Which tool is recommended for removing secrets from Git history?",
            options: [
              "git rm",
              "git-filter-repo or BFG Repo-Cleaner",
              "GitHub's delete button",
              "git reset --hard"
            ],
            correct: 1,
            explanation: "'git-filter-repo' (or BFG) rewrites history to remove files/content. Warning: this changes all commit hashes! Requires force-push and team coordination."
          }
        ]
      },
      {
        id: "8-2",
        title: "Prevention: Never Commit Secrets",
        story: "Prevention beats cure. Let's set up defenses against accidentally committing sensitive data.",
        concept: "Secret Prevention",
        difficulty: 3,
        xpReward: 170,
        challenges: [
          {
            type: "quiz",
            question: "Which tool scans commits for secrets before they're pushed?",
            options: [
              "git scan",
              "Pre-commit hooks with tools like gitleaks, detect-secrets, or git-secrets",
              "GitHub automatically blocks secrets",
              "Antivirus software"
            ],
            correct: 1,
            explanation: "Tools like gitleaks run in pre-commit hooks, scanning staged changes for patterns like API keys, passwords, tokens. They block the commit if found!"
          },
          {
            type: "quiz",
            question: "What should NEVER be in a Git repository?",
            options: [
              "README files",
              "API keys, passwords, private keys, tokens, connection strings",
              "Configuration files",
              "Documentation"
            ],
            correct: 1,
            explanation: "Secrets belong in environment variables, secret managers (Vault, AWS Secrets Manager), or encrypted configs. Never in code, even in 'private' repos."
          },
          {
            type: "scenario",
            situation: "You need database credentials in your app. What's the secure approach?",
            options: [
              "Put them in config.json",
              "Environment variables loaded at runtime, stored in secrets manager",
              "Encrypt them in the repo",
              "Hard-code them, it's a private repo"
            ],
            correct: 1,
            explanation: "Environment variables (from CI/CD secrets, cloud secrets manager, or .env files in .gitignore) keep credentials out of code. Different environments get different secrets."
          }
        ]
      },
      {
        id: "8-3",
        title: "Signed Commits",
        story: "How do you prove YOU made a commit, not someone impersonating you? GPG signing!",
        concept: "Commit Signing",
        difficulty: 4,
        xpReward: 200,
        challenges: [
          {
            type: "quiz",
            question: "Why sign commits with GPG?",
            options: [
              "Makes commits faster",
              "Cryptographically proves the commit author's identity",
              "Required by Git",
              "Encrypts the code"
            ],
            correct: 1,
            explanation: "Anyone can set any email in git config. Signed commits prove identity cryptographically. GitHub shows 'Verified' badge. Important for security-sensitive repos!"
          },
          {
            type: "terminal",
            prompt: "Create a signed commit",
            expectedCommand: "git commit -S",
            hint: "git commit -S -m \"feat: signed commit\"",
            explanation: "-S flag signs the commit with your GPG key. Configure 'git config --global commit.gpgsign true' to sign all commits automatically."
          },
          {
            type: "quiz",
            question: "Besides GPG, what other signing method does GitHub support?",
            options: [
              "No other methods",
              "SSH key signing (newer, simpler setup)",
              "Password signing",
              "Biometric signing"
            ],
            correct: 1,
            explanation: "Git 2.34+ supports SSH signing, which is easier than GPG setup. Configure your SSH key for signing, and commits show as verified. Much more convenient!"
          }
        ]
      },
      {
        id: "8-4",
        title: "Branch Protection",
        story: "Main branch must stay stable. Let's configure protections to prevent accidents.",
        concept: "Branch Protection Rules",
        difficulty: 3,
        xpReward: 180,
        challenges: [
          {
            type: "quiz",
            question: "Which is NOT a common branch protection rule?",
            options: [
              "Require pull request reviews",
              "Require status checks to pass",
              "Require commit messages to be funny",
              "Require signed commits"
            ],
            correct: 2,
            explanation: "Branch protection rules include: required reviews, status checks (CI), up-to-date branches, signed commits, no force pushes, linear history. Not commit humor!"
          },
          {
            type: "quiz",
            question: "Why prevent force pushes to main?",
            options: [
              "Force pushing is slow",
              "Force pushing rewrites history, breaking collaborators' local copies",
              "GitHub can't handle force pushes",
              "Main branch can't be force pushed anyway"
            ],
            correct: 1,
            explanation: "Force pushing shared branches causes havoc. Others have the old commits; after force push, their history diverges. Prevent with branch protection rules."
          },
          {
            type: "quiz",
            question: "What does 'require linear history' enforce?",
            options: [
              "All commits on one line in the message",
              "No merge commits — only rebased/squashed branches can merge",
              "Commits must be sequential",
              "No branching allowed"
            ],
            correct: 1,
            explanation: "Linear history means no merge commits. PRs must use rebase or squash merge. Results in clean, linear main branch history. Some teams prefer this aesthetic."
          }
        ]
      },
      {
        id: "8-5",
        title: "Audit & Compliance",
        story: "Enterprise clients need audit trails. Git provides powerful auditing capabilities.",
        concept: "Git Audit Trail",
        difficulty: 3,
        xpReward: 170,
        challenges: [
          {
            type: "quiz",
            question: "Git inherently provides audit capability because:",
            options: [
              "GitHub tracks everything",
              "Every commit records author, timestamp, and changes immutably (if not rewritten)",
              "Git has built-in audit reports",
              "It emails changes to admins"
            ],
            correct: 1,
            explanation: "Each commit is a permanent record: who, when, what. Combined with branch protection (no force push), Git history becomes an audit trail. Sign commits for authenticity!"
          },
          {
            type: "terminal",
            prompt: "Find all commits by a specific author",
            expectedCommand: "git log --author",
            hint: "git log --author=\"name@example.com\"",
            explanation: "--author filters log by author email/name. Useful for auditing, code review, or finding who to ask about specific code."
          },
          {
            type: "quiz",
            question: "For compliance, what additional GitHub feature provides detailed access logs?",
            options: [
              "GitHub Stars",
              "Audit log (Enterprise) showing all actions by all users",
              "GitHub Pages",
              "GitHub Gists"
            ],
            correct: 1,
            explanation: "GitHub Enterprise Audit Log tracks: who accessed what, permission changes, repo activities, authentication events. Essential for compliance (SOC2, HIPAA, etc.)."
          }
        ]
      },
      {
        id: "8-6",
        title: "Git Configuration Security",
        story: "Your Git configuration itself can be a security asset or liability. Let's audit and harden it.",
        concept: "Secure Configuration",
        difficulty: 3,
        xpReward: 160,
        challenges: [
          {
            type: "quiz",
            question: "Which git config values should you verify are set correctly?",
            options: [
              "user.name only",
              "user.name, user.email, commit.gpgsign, and credential storage",
              "color.ui only",
              "core.editor only"
            ],
            correct: 1,
            explanation: "Identity (name/email) should be accurate. GPG signing adds verification. Credential storage (cache, osxkeychain, etc.) should be secure. These affect security and attribution."
          },
          {
            type: "terminal",
            prompt: "List all your git configuration",
            expectedCommand: "git config --list",
            hint: "git config --list --show-origin",
            explanation: "--show-origin shows where each config comes from (global, local, system). Useful for debugging and auditing your configuration sources."
          },
          {
            type: "quiz",
            question: "What's the security benefit of SSH over HTTPS for Git remotes?",
            options: [
              "SSH is faster",
              "SSH keys are harder to accidentally leak than tokens; no password prompts",
              "HTTPS doesn't work with GitHub",
              "No benefit, they're equal"
            ],
            correct: 1,
            explanation: "SSH keys: you don't type passwords that could be keylogged, keys aren't easily copy-pasted into chats, keys can require passphrases. More secure workflow!"
          }
        ]
      }
    ]
  }
];

// Calculate total missions
export const totalMissions = chapters.reduce((sum, ch) => sum + ch.missions.length, 0);
