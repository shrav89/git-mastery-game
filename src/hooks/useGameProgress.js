import { useCallback, useMemo } from 'react';
import { useLocalStorage, STORAGE_KEY, getStorageValue } from './useLocalStorage';

const CURRENT_VERSION = 1;

const DEFAULT_PROGRESS = {
  playerName: '',
  completedMissions: [],
  xp: 0,
  version: CURRENT_VERSION,
};

/**
 * Validate and migrate progress data
 * @param {*} data - raw data from storage
 * @returns {object} - validated progress object
 */
function validateProgress(data) {
  if (!data || typeof data !== 'object') {
    return DEFAULT_PROGRESS;
  }

  return {
    playerName:
      typeof data.playerName === 'string' ? data.playerName : DEFAULT_PROGRESS.playerName,
    completedMissions: Array.isArray(data.completedMissions)
      ? data.completedMissions.filter((id) => typeof id === 'string')
      : DEFAULT_PROGRESS.completedMissions,
    xp: typeof data.xp === 'number' && data.xp >= 0 ? data.xp : DEFAULT_PROGRESS.xp,
    version: CURRENT_VERSION,
  };
}

/**
 * Check if user is returning (has saved progress)
 * @returns {boolean}
 */
export function isReturningUser() {
  const data = getStorageValue(STORAGE_KEY, null);
  if (!data) return false;
  const validated = validateProgress(data);
  return validated.playerName.length > 0;
}

/**
 * Get initial game state based on saved progress
 * @returns {'welcome' | 'chapters'}
 */
export function getInitialGameState() {
  return isReturningUser() ? 'chapters' : 'welcome';
}

/**
 * Hook for managing game progress with localStorage persistence
 * @returns {object} - progress state and updaters
 */
export function useGameProgress() {
  const [progress, setProgress, clearProgress] = useLocalStorage(
    STORAGE_KEY,
    DEFAULT_PROGRESS
  );

  const validatedProgress = useMemo(() => validateProgress(progress), [progress]);

  const setPlayerName = useCallback(
    (name) => {
      setProgress((prev) => ({
        ...validateProgress(prev),
        playerName: name,
      }));
    },
    [setProgress]
  );

  const completeMission = useCallback(
    (missionId, earnedXp) => {
      setProgress((prev) => {
        const validated = validateProgress(prev);
        const alreadyCompleted = validated.completedMissions.includes(missionId);

        return {
          ...validated,
          completedMissions: alreadyCompleted
            ? validated.completedMissions
            : [...validated.completedMissions, missionId],
          xp: validated.xp + earnedXp,
        };
      });
    },
    [setProgress]
  );

  const resetProgress = useCallback(() => {
    clearProgress();
  }, [clearProgress]);

  return {
    playerName: validatedProgress.playerName,
    completedMissions: validatedProgress.completedMissions,
    xp: validatedProgress.xp,
    isReturningUser: validatedProgress.playerName.length > 0,
    setPlayerName,
    completeMission,
    resetProgress,
  };
}
