import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fillDurationVariables, updateProgess } from '../features/progress';
import { nextSong } from '../features/playlist';

export default function Player() {
	var loop = true;
	const dispatch = useDispatch();
	const playlist = useSelector((state) => state.playlist);
	const audioRef = useRef();
	useEffect(() => {
		if (playlist.songs && playlist.play) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [playlist]);
	function handleLoadedData(e) {
		if (playlist.songs) {
			dispatch(
				fillDurationVariables({
					currentTime: e.target.currentTime,
					totalDuration: e.target.duration,
				})
			);
		}
	}
	function handleEnded(e) {
		if (!playlist.loop) {
			const nextIndex =
				playlist.songs.findIndex(
					(song) => song.id === playlist.currentMusicID
				) + 1;

			dispatch(nextSong(nextIndex));
		} else {
			loop = true;
		}
	}
	function handleTimeUpdate(e) {
		dispatch(updateProgess(e.target.currentTime));
	}

	return (
		<audio
			className='outline-none'
			id='audio-player'
			src={
				playlist.songs?.find((obj) => obj.id === playlist.currentMusicID).url
			}
			ref={audioRef}
			onLoadedData={handleLoadedData}
			onTimeUpdate={handleTimeUpdate}
			onEnded={handleEnded}
			loop={loop}></audio>
	);
}
