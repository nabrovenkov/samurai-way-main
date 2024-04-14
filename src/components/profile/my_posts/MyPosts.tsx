import { PostType } from '../../..';
import s from './MyPosts.module.css';
import { Post } from './post/Post';


export function MyPosts({posts}: {posts: PostType[]}) {
	
	const postsElements = posts.map((p) => (
		<Post message={p.message} like={p.like} />
	));
	return (
		<div className={s.postsBlock}>
			<h3>My Posts</h3>
			<div>
				<textarea></textarea>
			</div>
			<div>
				<button>Add post</button>
				<button>remove</button>
			</div>
			<div>New Posts</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}
