import React from 'react';
import prevIcon from '../../assets/prev-icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { previousSong } from '../../features/playlist';

export default function NextButton() {
	const dispatch = useDispatch();
	const playlist = useSelector((state) => state.playlist);
	var player = document.getElementById('audio-player');
	function handleClick() {
		if (playlist.songs) {
			const prevIndex =
				playlist.songs.findIndex(
					(song) => song.id === playlist.currentMusicID
				) - 1;
			dispatch(previousSong(prevIndex));
		}
	}
	return (
		<button
			onClick={handleClick}
			className='rounded-full bg-slate-400 p-2 w-10 outline-none'>
			<img
				src={prevIcon}
				alt=''
			/>
		</button>
	);
}
