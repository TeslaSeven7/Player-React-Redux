import { configureStore } from '@reduxjs/toolkit';
import playlist from './features/playlist';
import progress from './features/progress';
export const store = configureStore({
	reducer: { playlist, progress },
});
