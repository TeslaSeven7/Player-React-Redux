import React from 'react';
import nextIcon from '../../assets/next-icon.svg';

export default function NextButton() {
	return (
		<button className='rounded-full bg-slate-400 p-2 w-10'>
			<img
				src={nextIcon}
				alt=''
			/>
		</button>
	);
}
