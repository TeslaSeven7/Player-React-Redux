import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import replay from '../../assets/replay.svg';
import { toggleLoop } from '../../features/playlist';
import classNames from 'classnames';

export default function RepeatButton() {
	const playlist = useSelector((state) => state.playlist);
	const dispatch = useDispatch();
	console.log(playlist.loop);
	function handleToggleLoop() {
		dispatch(toggleLoop());
	}
	return (
		<button onClick={handleToggleLoop}>
			<img
				className={classNames(
					'w-6 ml-5 mr-5 transition-all hover:opacity-100 hover:scale-110',
					playlist.loop ? 'opacity-100' : 'opacity-70 '
				)}
				src={replay}
				alt=''
			/>
		</button>
	);
}
