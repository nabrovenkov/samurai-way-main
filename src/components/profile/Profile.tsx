import s from './Profile.module.css'
import { MyPosts } from './my_posts/MyPosts';

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
			<MyPosts/>
		</div>
	);
};
