import { configureStore } from '@reduxjs/toolkit';
import playlist from './features/playlist';
export const store = configureStore({
	reducer: { playlist },
});
