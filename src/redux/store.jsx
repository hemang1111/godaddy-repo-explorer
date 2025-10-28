import { configureStore } from '@reduxjs/toolkit';
import repoReducer from './RepoListSlice';

export const store = configureStore({
  reducer: {
    repolist: repoReducer,
  },
});
