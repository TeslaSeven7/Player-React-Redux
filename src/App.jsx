import { useState } from 'react';
import Player from './components/Player';
import Playlist from './components/Playlist';
import PlayerPanel from './layouts/Player/PlayerPanel';
import { FileUploader } from 'react-drag-drop-files';
function App() {
	const fileTypes = ['MP3', 'WAV', 'FLAC'];
	const [file, setFile] = useState(null);
	const handleChange = (file) => {
		setFile(file);
		console.log(file);
	};
	return (
		<>
			<div className='min-h-screen bg-orange-50'>
				<nav className='flex justify-end h-[5.5rem] items-center px-8'>
					<div className='absolute z-10 -top-10 left-0'>
						<p className='text-[10rem] font-semibold title'>SUPERPLAYER.JS</p>
					</div>
					<div className=' h-14 w-14 bg-white border-2 border-black rounded-full flex flex-col justify-evenly items-center py-2 cursor-pointer  relative bottom-[3px] shadow-[4px_4px_0px_0px_#000000] hover:bottom-[0px] hover:shadow-[0px_0px_0px_0px_#000000] transition-all'>
						<span className='h-0.5 w-7 block bg-black'></span>
						<span className='h-0.5 w-7 block bg-black'></span>
						<span className='h-0.5 w-7 block bg-black'></span>
					</div>
				</nav>
				<div className=' pe-5 flex'>
					<div className='relative w-5/6 bottom-0 rounded-tr-3xl p-6 bg-orange-400  border-2  border-black shadow-[5px_7px_0px_0px_#000000]'>
						<PlayerPanel />
					</div>
					<div className='w-1/6 ms-10 pb-5 flex flex-col justify-between'>
						<div className=''>
							<Player />
							<h1 className='text-slate-900 text-2xl font-bold mt-10 flex items-center'>
								<div className=' h-10 w-10 rounded-full flex'>
									<div className=' h-full w-1/4 flex flex-col justify-evenly items-center py-2'>
										<span className='h-[.15rem] w-[.15rem] block bg-black'></span>
										<span className='h-[.15rem] w-[.15rem] block bg-black'></span>
										<span className='h-[.15rem] w-[.15rem] block bg-black'></span>
									</div>
									<div className=' h-full w-3/4 flex flex-col justify-evenly items-starrt py-2'>
										<span className='h-[.15rem] w-5 block bg-black'></span>
										<span className='h-[.15rem] w-5 block bg-black'></span>
										<span className='h-[.15rem] w-5 block bg-black'></span>
									</div>
								</div>
								Playlist
							</h1>
							<Playlist />
						</div>
						<FileUploader
							multiple={true}
							handleChange={handleChange}
							name='file'
							types={fileTypes}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
