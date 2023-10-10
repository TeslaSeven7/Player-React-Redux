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

			dispatch(nextSong(nextIndex));
		}
	}
	return (
		<button
			className='rounded-full  p-2 w-10 bg-amber-600 outline-none border-2 relative bottom-[1px] border-black shadow-[2px_2px_0px_0px_#000000] hover:bottom-[0px] hover:shadow-[0px_0px_0px_0px_#000000] transition-all'
			onClick={handleClick}>
			<img
				src={nextIcon}
				alt=''
			/>
		</button>
	);
}
