import { state } from '../../redux/state';
import s from './Profile.module.css';
import { MyPosts } from './my_posts/MyPosts';
import { ProfileInfo } from './profile_info/ProfileInfo';

export function Profile({state}: any) {
	
	return (
		<div className={s.content}>
			<ProfileInfo /> 
			<MyPosts posts={state.posts}/>
		</div>
	);
}
