// src/hooks/useGameState.js
import { useCallback, useEffect } from 'react';
import useGameStore from '../stores/gameStore';

export const useGameState = () => {
  const {
    spawnBug,
    updateBugs,
    wave
  } = useGameStore();

  useEffect(() => {
    const bugInterval = setInterval(spawnBug, 2000 / wave);
    const updateInterval = setInterval(updateBugs, 1000);

    return () => {
      clearInterval(bugInterval);
      clearInterval(updateInterval);
    };
  }, [wave, spawnBug, updateBugs]);
};
