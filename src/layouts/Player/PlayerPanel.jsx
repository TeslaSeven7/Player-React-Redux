import React, { useEffect } from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import Progress from './Progress';
import formatValue from '../../utils/formatValue';
import TogglePlayButton from './TogglePlayButton';
import { useSelector } from 'react-redux';
export default function PlayerPanel() {
	const progressData = useSelector((state) => state.progress);
	const playlist = useSelector((state) => state.playlist);
	const actualSong = playlist?.songs?.find(
		(obj) => obj.id === playlist.currentMusicID
	);

	return (
		<div className='relative w-full h-full mx-auto bottom-0 p-6  text-white flex flex-col justify-between'>
			<div className='flex justify-center mb-10'>
				<img
					src={
						playlist.songs?.find((obj) => obj.id === playlist.currentMusicID)
							.img
					}
					alt=''
				/>
			</div>
			<div className=''>
				<div className='max-w[800px] mx-auto mb-2 flex justify-evenly'>
					<div className='w-1/3'>
						<p className='text-xl font-semibold'>
							{playlist.songs && actualSong.title}
						</p>
						<p className='text-lg '>{playlist.songs && actualSong.artist}</p>
					</div>
					<div className='w-1/3'>
						<div className='flex justify-center items-center mb-5'>
							<PreviousButton />
							<TogglePlayButton />
							<NextButton />
						</div>
					</div>
					<div className='w-1/3'>
						<p className='text-lg text-end'>
							{playlist.songs?.findIndex(
								(song) => song.id === playlist.currentMusicID
							) + 1}
							/{playlist.songs?.length}
						</p>
						<div className='flex justify-end'>
							<span>{formatValue(progressData.current)}</span>
							<span>&nbsp;/&nbsp;</span>
							<span>{formatValue(progressData.totalDuration)}</span>
						</div>
					</div>
				</div>
				<div className='w-full'>
					<Progress />
				</div>
			</div>
		</div>
	);
}
