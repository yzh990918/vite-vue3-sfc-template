import { defineStore } from 'pinia';
import { store } from '..';
// state interface
interface AppState {
  count: number;
}

export const useAppStore = defineStore({
  id: 'pinia-app',
  state: (): AppState => ({
    count: 1,
  }),
  getters: {
    getCount(): number {
      return this.count;
    },
  },
  // async is supported
  actions: {
    DOUBLE_COUNT() {
      this.count *= 2;
    },
  },
});

export function useAppStoreHook() {
  return useAppStore(store);
}
