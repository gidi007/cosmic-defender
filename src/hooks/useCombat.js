// src/hooks/useCombat.js
import { useCallback } from 'react';
import useGameStore from '../stores/gameStore';

export const useCombat = () => {
  const calculateDamage = useCallback((module, bug) => {
    // Combat calculations
  }, []);

  return { calculateDamage };
};