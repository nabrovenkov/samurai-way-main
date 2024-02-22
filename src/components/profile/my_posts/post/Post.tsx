import s from './Post.module.css'
type PostPropsType = {
	message: string
	like: number
}
export function Post({message, like}:PostPropsType) {
	return (
		<div className={s.post}>
			<div>Post 2</div>
			<img
				src='https://sneg.top/uploads/posts/2023-06/1687465256_sneg-top-p-medved-na-avatarku-v-vatsap-dlya-muzhchin-10.jpg'
				alt='avatar'
			/>
			{message}
			<div>like: {like}</div>
		</div>
	)
}
