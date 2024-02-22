import s from './style/Navbar.module.css'

export function Navbar () {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<a>Profile</a>
			</div>
			<div className={s.item}> 
				<a>Messages</a>
			</div>
			<div className={s.item}>
				<a>News</a>
			</div>
			<div className={s.item}>
				<a>Music</a>
			</div>
			<div className={s.item}>
				<a>Settings</a>
			</div>
		</nav>
	)
}
