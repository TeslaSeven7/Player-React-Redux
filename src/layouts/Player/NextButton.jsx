import React from 'react';
import nextIcon from '../../assets/next-icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { nextSong } from '../../features/playlist';

export default function NextButton() {
	const dispatch = useDispatch();
	const playlist = useSelector((state) => state.playlist);

	function handleClick() {
		if (playlist.songs) {
			console.log('current ID' + playlist.currentMusicID);

			const nextIndex =
				playlist.songs.findIndex(
					(song) => song.id === playlist.currentMusicID
				) + 1;
			console.log(nextIndex);

			dispatch(nextSong(nextIndex));
		}
	}
	return (
		<button
			className='rounded-full  p-2 w-10 outline-none'
			onClick={handleClick}>
			<img
				src={nextIcon}
				alt=''
			/>
		</button>
	);
}
