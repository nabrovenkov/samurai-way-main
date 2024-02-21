import React from 'react'
import './App.css'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Profile } from './components/Profile'

function App() {
	return (
		<AppWrapper>
			<Header />
			<Navbar />
			<Profile />
		</AppWrapper>
	)
}

const AppWrapper = styled.div`
	display: grid;
	width: 1200px;
	margin: 0 auto;

	grid-template-areas: 'h h' 'n c';

	grid-template-rows: 60px 1fr;
	grid-template-columns: 2fr 10fr;
	grid-gap: 10px;
`


export default App
