import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import formatValue from '../../utils/formatValue';
export default function Progress() {
	const progressData = useSelector((state) => state.progress);
	function handleProgressClick(e) {
		const player = document.getElementById('audio-player');
		const rect = e.target.getBoundingClientRect();
		const width = rect.width;
		const x = e.clientX - rect.left;
		player.currentTime = (x / width) * progressData.totalDuration;
	}

	return (
		<div className=' mx-auto relative'>
			<div
				onMouseDown={handleProgressClick}
				className='bg-amber-300 h-3 rounded-full cursor-pointer overflow-hidden relative border-2 border-black  shadow-[4px_2px_0px_0px_#000000]'>
				<div
					style={{
						transform: `scaleX(${
							progressData.current / progressData.totalDuration
						})`,
					}}
					className='bg-white  origin-left h-full pointer-events-none'></div>
			</div>
			<div
				style={{
					left: (progressData.current / progressData.totalDuration) * 100 + '%',
				}}
				className='rounded-full bg-white  h-[16px] w-[16px] absolute -top-[2px]  border-[3px] border-black '></div>
		</div>
	);
}
