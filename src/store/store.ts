import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { proApi } from './reducers/pro.api';
import cityReducer from './reducers/city.slice';

const rootReducer = combineReducers({
  [proApi.reducerPath]: proApi.reducer,
  cityTariffs: cityReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(proApi.middleware),
    devTools: true,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

setupListeners(setupStore().dispatch);
