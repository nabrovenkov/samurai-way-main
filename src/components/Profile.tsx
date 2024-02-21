import { styled } from "styled-components"

export function Profile () {
  return (
		<ProfileStyled>
			<img
				src='https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xXzE1MzIzNzgxNThfMDE3/screen-1.jpg?fakeurl=1&type=.jpg'
				alt=''
			/>
		</ProfileStyled>
	)
}

const ProfileStyled = styled.div`
	grid-area: c;

	background-color: brown;

	& img {
		width: 199px;
	}
`
const AvaDescription = styled.div``
const MyPosts = styled.div``
const NewPosts = styled.div``