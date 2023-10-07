import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMusicsData } from '../features/playlist';

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
						className='p-2 border-2 font-semibold bg-indigo-100 hover:bg-indogpo-200 text-slate-800 mb-3 rounded cursor-pointer'
						key={song.id}>
						<span>{song.title} - </span>
						<span>{song.artist}</span>
					</li>
				))}
		</ul>
	);
}
