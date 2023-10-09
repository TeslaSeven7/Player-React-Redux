import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMusicsData } from '../features/playlist';
import { changeSong } from '../features/playlist';
import classNames from 'classnames';

export default function Playlist() {
	const playlist = useSelector((state) => state.playlist);
	const dispatch = useDispatch();

	if (!playlist.songs) {
		dispatch(getMusicsData());
	}
	return (
		<ul className='mt-4 pb-[300px]'>
			{playlist?.songs?.length &&
				playlist.songs.map((song) => (
					<li
						onClick={() => dispatch(changeSong(song.id))}
						className={classNames(
							'p-2 border-2 font-semibold  hover:bg-indigo-200 text-slate-800 mb-3 rounded cursor-pointer',
							playlist.currentMusicID === song.id
								? 'bg-indigo-200'
								: 'bg-indigo-100'
						)}
						key={song.id}>
						<span>{song.title} - </span>
						<span>{song.artist}</span>
					</li>
				))}
		</ul>
	);
}
