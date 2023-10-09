import React from 'react';
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
				onClick={handleProgressClick}
				className='bg-amber-300 h-1 rounded cursor-pointer overflow-hidden relative'>
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
				className='rounded-full bg-orange-500  h-[14px] w-[14px] absolute -top-[5px] -translate-x-3 border-[3px] border-white'></div>
		</div>
	);
}
