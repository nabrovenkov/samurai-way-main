import s from './MyPosts.module.css'
import { Post } from './post/Post';

export function MyPosts () {
	return (
		<div>
			<textarea></textarea>
			<button>Add post</button>
			<button>remove</button>
			My Posts
			<div>New Posts</div>
			<div className='posts'>
				<Post message='Hi, how are you?' like={8} />
				<Post message="It's my firs post" like={15} />
			</div>
		</div>
	)
};
