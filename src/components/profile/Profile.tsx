import s from './Profile.module.css'

export function Profile() {
	return (
		<div className={s.content}>
			<div>
				<img
					src='https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xXzE1MzIzNzgxNThfMDE3/screen-1.jpg?fakeurl=1&type=.jpg'
					alt=''
				/>
			</div>
			<div>ava + description</div>
			<div>
				My Posts
				<div>New Posts</div>
				<div className='posts'>
					<div className='item'>Post 1</div>
					<div className='item'>Post 2</div>
				</div>
			</div>
		</div>
	)
}
