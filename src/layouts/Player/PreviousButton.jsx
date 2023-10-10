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
			className='rounded-full p-2 w-10 bg-amber-600 outline-none border-2 relative bottom-[1px] border-black shadow-[2px_2px_0px_0px_#000000] hover:bottom-[0px] hover:shadow-[0px_0px_0px_0px_#000000] transition-all'>
			<img
				src={prevIcon}
				alt=''
			/>
		</button>
	);
}
