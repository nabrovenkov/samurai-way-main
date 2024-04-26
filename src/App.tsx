import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Setting } from './components/setting/Setting';
import { StateType } from './redux/state';

function App({state}: any) {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path='/profile' element={<Profile state={state.profilePage} />}/>
						<Route path='/dialogs' element={<Dialogs />}/>
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/setting' element={<Setting />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
