import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMusicsData } from '../features/playlist';
import { changeSong } from '../features/playlist';
import classNames from 'classnames';
import Song from './Song';
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
					<Song
						key={song.id}
						id={song.id}
						title={song.title}
						artist={song.artist}
						img={song.img}
					/>
				))}
		</ul>
	);
}
