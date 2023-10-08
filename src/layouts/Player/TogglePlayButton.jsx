import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playMusic, pauseMusic } from '../../features/playlist';
import playIcon from '../../assets/play-icon.svg';
import pauseIcon from '../../assets/pause-icon.svg';
export default function TogglePlayButton() {
	const dispatch = useDispatch();
	const playlist = useSelector((state) => state.playlist);
	var player = document.getElementById('audio-player');
	function handlePlay() {
		if (!playlist.play) {
			dispatch(playMusic());
			player.play();
		} else {
			dispatch(pauseMusic());
			player.pause();
		}
	}
	return (
		<button
			className='rounded-full bg-slate-100 p-2 mx-4'
			onClick={handlePlay}>
			{!playlist?.play ? (
				<img
					src={playIcon}
					alt='play'
				/>
			) : (
				<img
					src={pauseIcon}
					alt='pause'
				/>
			)}
		</button>
	);
}
