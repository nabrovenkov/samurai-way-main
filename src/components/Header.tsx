import styled from 'styled-components'

export function Header () {
	return (
		<HeaderStyled>
			<img
				src='https://yt3.googleusercontent.com/t5SJiLmCtVMVG6FHbt4UhELPTnUTXA7oLpcfhzLqAk3OdcW_WqSZwLyCjHoxlfpALitEvaob2Q=s900-c-k-c0x00ffffff-no-rj'
				alt='logo'
			/>
		</HeaderStyled>
	)
}


export const HeaderStyled = styled.header`
	grid-area: h;

	background-color: green;

	& img {
		width: 20px;
	}
`
