import { Property } from '../properties';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from '../../utils/zustand.helper';
import deepmerge from 'deepmerge';

type AppAction = {
  setSelectedProperty: (item: Property) => void;
};

type AppState = {
  selectedProperty: Property | undefined;
};

const initState: AppState = {
  selectedProperty: undefined,
};

type AppStateAndAction = AppState & { actions: AppAction };

const useAppStateBase = create<AppStateAndAction>()(
  persist(
    immer(
      devtools(
        (set) => ({
          ...initState,
          actions: {
            setSelectedProperty: (property: Property) => {
              set((state) => {
                state.selectedProperty = property;
              });
            },
          },
        }),
        {
          enabled: true,
          name: 'app-state',
          store: 'app-state',
        }
      )
    ),
    {
      name: 'app-state',
      storage: createJSONStorage(() => sessionStorage),
      merge: (persistedState, currentState) =>
        deepmerge(currentState, persistedState as any),
    }
  )
);

export const useAppState = createSelectors(useAppStateBase);
