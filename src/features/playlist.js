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
			state.songs = action.payload;
			state.currentMusicID = action.payload[0].id;
		},
		playMusic: (state, action) => {
			state.play = true;
			console.log('true');
		},
		pauseMusic: (state, action) => {
			state.play = false;
			console.log('false');
		},
	},
});
export function getMusicsData(action) {
	return function (dispatch, getState) {
		fetch('/data/playlist.json')
			.then((data) => data.json())
			.then((data) => dispatch(addBaseSongs(data.playlist)));
	};
}
export const { addBaseSongs, playMusic, pauseMusic } = playlist.actions;
export default playlist.reducer;
