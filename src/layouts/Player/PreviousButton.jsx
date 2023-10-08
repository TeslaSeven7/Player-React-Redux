import React from 'react';
import prevIcon from '../../assets/prev-icon.svg';

export default function NextButton() {
	return (
		<button className='rounded-full bg-slate-400 p-2 w-10'>
			<img
				src={prevIcon}
				alt=''
			/>
		</button>
	);
}
