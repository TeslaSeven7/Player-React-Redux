import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	songs: undefined,
	play: false,
	currentMusicID: undefined,
	loop: false,
};
export const playlist = createSlice({
	name: 'playlist',
	initialState,
	reducers: {
		addBaseSongs: (state, action) => {
			state.songs = action.payload;
			state.currentMusicID = action.payload[0].id;
		},
		toggleLecture: (state, action) => {
			state.play = !state.play;
		},
		toggleLoop: (state, action) => {
			state.loop = !state.loop;
		},

		nextSong: (state, action) => {
			if (action.payload === state.songs.length) {
				state.currentMusicID = state.songs[0].id;
			} else {
				state.currentMusicID = state.songs[action.payload].id;
			}
		},
		previousSong: (state, action) => {
			if (action.payload < 0) {
				state.currentMusicID = state.songs[state.songs.length - 1].id;
			} else {
				state.currentMusicID = state.songs[action.payload].id;
			}
		},
		changeSong: (state, action) => {
			state.currentMusicID = action.payload;
		},
		randomizePlaylist: (state, action) => {
			const shuffledArray = [...state.songs];
			for (let i = shuffledArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffledArray[i], shuffledArray[j]] = [
					shuffledArray[j],
					shuffledArray[i],
				];
			}
			state.songs = shuffledArray;
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
export const {
	addBaseSongs,
	toggleLecture,
	nextSong,
	previousSong,
	changeSong,
	toggleLoop,
	randomizePlaylist,
} = playlist.actions;
export default playlist.reducer;
