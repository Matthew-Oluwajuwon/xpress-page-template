import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setTheme, themeReducer } from './slices/theme';

export const store = configureStore({
  reducer: {
    theme: themeReducer
  },
});


export { setTheme }

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
