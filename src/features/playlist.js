import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	songs: undefined,
	play: false,
	currentMusicID: undefined,
};
export const playlist = createSlice({
	name: 'playlist',
	initialState,
	reducers: {
		addBaseSongs: (state, action) => {
			console.log('yolo3');
			state.songs = action.payload;
			state.currentMusicID = action.payload[0].id;
		},
	},
});
export function getMusicsData(action) {
	console.log('yolo1');
	return function (dispatch, getState) {
		console.log('yolo2');
		fetch('/data/playlist.json')
			.then((data) => data.json())
			.then((data) => dispatch(addBaseSongs(data.playlist)));
	};
}
export const { addBaseSongs } = playlist.actions;
export default playlist.reducer;
