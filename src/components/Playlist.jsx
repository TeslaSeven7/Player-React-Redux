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
							' flex items-center w-full p-2 ps-3 font-semibold rounded-md text-slate-800 mb-3 cursor-pointer transition-all relative right-0',
							playlist.currentMusicID === song.id
								? 'text-white bg-purple-500 border border-purple-600 shadow-[4px_4px_0px_0px_#4c1d95] right-5'
								: 'bg-orange-50 border border-orange-50 shadow-[4px_4px_0px_0px_#fff7ee]'
						)}
						key={song.id}>
						<div className='me-5  rounded h10 w-10 max-h-10 max-w-10 overflow-hidden relative bottom-[3px] border border-black shadow-[3px_3px_0px_0px_#000000] hover:bottom-[0px] hover:shadow-[0px_0px_0px_0px_#000000] transition-all'>
							<img
								className='object-fill'
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
