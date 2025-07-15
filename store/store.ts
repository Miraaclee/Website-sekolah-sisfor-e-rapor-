// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
// import reducer Anda di sini
// import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // tambahkan reducer lainnya di sini
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;