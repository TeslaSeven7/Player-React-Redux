import Playlist from './components/Playlist';

function App() {
	return (
		<>
			<div className='min-h-screen bg-slate-900 pt-20 px-4'>
				<div className='max-w-xl mx-auto'>
					{/*PLAYER */}
					<h1 className='text-slate-100 text-2xl text-center'>
						PLAYER REACT REDUX
					</h1>
					<Playlist />
				</div>
			</div>
			{/*PLAYERPANEL */}
		</>
	);
}

export default App;
