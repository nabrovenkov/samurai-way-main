import { PostType } from '../..';
import { state } from '../../redux/state';
import s from './Profile.module.css';
import { MyPosts } from './my_posts/MyPosts';
import { ProfileInfo } from './profile_info/ProfileInfo';

export function Profile({posts}: {posts: PostType[]}) {
	
	return (
		<div className={s.content}>
			<ProfileInfo/>
			<MyPosts />
		</div>
	);
}
