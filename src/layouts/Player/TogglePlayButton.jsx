import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLecture } from '../../features/playlist';
import playIcon from '../../assets/play-icon.svg';
import pauseIcon from '../../assets/pause-icon.svg';

export default function TogglePlayButton() {
	const dispatch = useDispatch();
	const playlist = useSelector((state) => state.playlist);
	var player = document.getElementById('audio-player');
	function handleTogglePlay() {
		if (!playlist.play) {
			player.play();
		} else {
			player.pause();
		}
		dispatch(toggleLecture());
	}
	return (
		<button
			className='rounded-full bg-slate-100 p-2 mx-4 outline-none border-2 relative bottom-[3px] border-black shadow-[4px_4px_0px_0px_#000000] hover:bottom-[0px] hover:shadow-[0px_0px_0px_0px_#000000] transition-all'
			onClick={handleTogglePlay}>
			<img
				src={playlist?.play ? pauseIcon : playIcon}
				alt='play'
			/>
		</button>
	);
}
