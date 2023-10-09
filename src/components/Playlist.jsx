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
		<ul className='mt-4 pb-[300px] w-full'>
			{playlist?.songs?.length &&
				playlist.songs.map((song) => (
					<li
						onClick={() => dispatch(changeSong(song.id))}
						className={classNames(
							' flex items-center w-full p-2 ps-3 font-semibold rounded-md text-slate-800 mb-3 cursor-pointer transition-all  ',
							playlist.currentMusicID === song.id
								? 'text-white bg-purple-500 border border-purple-600 shadow-[4px_4px_0px_0px_#4c1d95]'
								: 'bg-orange-50 border border-orange-50 shadow-[4px_4px_0px_0px_#fff7ee]'
						)}
						key={song.id}>
						<div className='me-5'>
							<img
								className='h-10 rounded'
								src={song.img}
								alt=''
							/>
						</div>
						<div className='flex flex-col'>
							<span>{song.title}</span>
							<span>{song.artist}</span>
						</div>
					</li>
				))}
		</ul>
	);
}
