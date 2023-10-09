import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	current: 0,
	totalDuration: 0,
};
export const progress = createSlice({
	name: 'progress',
	initialState,
	reducers: {
		fillDurationVariables: (state, action) => {
			state.current = action.payload.currentTime;
			state.totalDuration = action.payload.totalDuration;
		},
		updateProgess: (state, action) => {
			state.current = action.payload;
		},
	},
});

export const { fillDurationVariables, updateProgess } = progress.actions;
export default progress.reducer;
