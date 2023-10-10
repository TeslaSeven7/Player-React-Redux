import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shuffle from '../../assets/shuffle.svg';
import { randomizePlaylist } from '../../features/playlist';
import classNames from 'classnames';

export default function RandomizeButton() {
	const playlist = useSelector((state) => state.playlist);
	const dispatch = useDispatch();
	function handleRandomizePlaylist() {
		dispatch(randomizePlaylist(playlist.currentMusicID));
	}
	return (
		<button onClick={handleRandomizePlaylist}>
			<img
				className='w-6 ml-5 mr-5 transition-all opacity-70 hover:opacity-100 hover:scale-110'
				src={shuffle}
				alt=''
			/>
		</button>
	);
}
