import Player from './components/Player';
import Playlist from './components/Playlist';
import PlayerPanel from './layouts/Player/PlayerPanel';
function App() {
	return (
		<>
			<div className='min-h-screen bg-slate-900 pt-20 px-4'>
				<div className='max-w-xl mx-auto'>
					<Player />
					<h1 className='text-slate-100 text-2xl text-center'>
						PLAYER REACT REDUX
					</h1>
					<Playlist />
				</div>
			</div>
			<PlayerPanel />
		</>
	);
}

export default App;
