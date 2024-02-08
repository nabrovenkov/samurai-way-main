import styled from 'styled-components'

export function Navbar () {
	return (
		<NavbarStyled>
			<LinkNav>Profile</LinkNav>
			<LinkNav>Messages</LinkNav>
			<LinkNav>News</LinkNav>
			<LinkNav>Music</LinkNav>
			<LinkNav>Settings</LinkNav>
		</NavbarStyled>	
	)
}

const NavbarStyled = styled.nav`
	grid-area: n;

	background-color: blue;
`
const LinkNav = styled.a`
	display: block;
`