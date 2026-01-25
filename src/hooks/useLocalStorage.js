import { useState, useCallback } from 'react';

const STORAGE_KEY = 'git-mastery-progress';

/**
 * Check if localStorage is available
 */
function isLocalStorageAvailable() {
  try {
    const testKey = '__storage_test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generic hook for localStorage persistence
 * @param {string} key - localStorage key
 * @param {*} initialValue - default value if nothing in storage
 * @returns {[*, function, function]} - [value, setValue, clearValue]
 */
export function useLocalStorage(key, initialValue) {
  const storageAvailable = isLocalStorageAvailable();

  const [storedValue, setStoredValue] = useState(() => {
    if (!storageAvailable) {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);

        if (storageAvailable) {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue, storageAvailable]
  );

  const clearValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (storageAvailable) {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.warn(`Error clearing localStorage key "${key}":`, error);
    }
  }, [key, initialValue, storageAvailable]);

  return [storedValue, setValue, clearValue];
}

/**
 * Read localStorage synchronously (for initial state)
 * @param {string} key - localStorage key
 * @param {*} defaultValue - fallback value
 * @returns {*} - stored value or default
 */
export function getStorageValue(key, defaultValue) {
  if (!isLocalStorageAvailable()) {
    return defaultValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export { STORAGE_KEY };
