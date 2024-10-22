// src/stores/gameStore.js
import create from 'zustand';
import { moduleTypes, bugTypes } from '../constants';

const useGameStore = create((set, get) => ({
  // Game state
  modules: Array(48).fill(null),
  bugs: [],
  resources: 100,
  wave: 1,
  selectedModule: null,
  
  // Actions
  setSelectedModule: (module) => set({ selectedModule: module }),
  
  placeModule: (index, module) => {
    const { modules, resources } = get();
    if (resources >= module.cost && !modules[index]) {
      const newModules = [...modules];
      newModules[index] = module;
      set({
        modules: newModules,
        resources: resources - module.cost
      });
    }
  },
  
  spawnBug: () => {
    const { wave, bugs } = get();
    const newBug = {
      id: Date.now(),
      health: 100 * (1 + (wave - 1) * 0.1),
      path: [
        { x: 0, y: Math.random() * 80 },
        { x: 100, y: Math.random() * 80 }
      ]
    };
    set({ bugs: [...bugs, newBug] });
  },
  
  updateBugs: () => {
    const { bugs, modules } = get();
    // Combat logic here
  }
}));

export default useGameStore;