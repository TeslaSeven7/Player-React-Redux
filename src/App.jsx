import Player from './components/Player';
import Playlist from './components/Playlist';
import PlayerPanel from './layouts/Player/PlayerPanel';
function App() {
	return (
		<>
			<div className='min-h-screen bg-orange-50 pt-20 pe-5 flex'>
				<div className='relative w-5/6 bottom-0 rounded-tr-3xl p-6 bg-orange-400  border-2  border-black shadow-[8px_10px_0px_0px_#000000]'>
					<div className='absolute -top-[9rem] -left-3'>
						<p className='text-[10rem] font-semibold title'>SUPERPLAYER.JS</p>
					</div>
					<PlayerPanel />
				</div>
				<div className='w-1/6 ms-10'>
					<Player />
					<h1 className='text-slate-900 text-2xl font-bold mt-10'>Playlist</h1>
					<Playlist />
				</div>
			</div>
		</>
	);
}

export default App;
