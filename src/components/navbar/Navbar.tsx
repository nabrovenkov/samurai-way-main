import s from './Navbar.module.css'

export function Navbar() {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<a href='/profile'>Profile</a>
			</div>
			<div className={s.item}>
				<a href='/dialogs'>Messages</a>
			</div>
			<div className={s.item}>
				<a href='/news'>News</a>
			</div>
			<div className={s.item}>
				<a href='/music'>Music</a>
			</div>
			<div className={s.item}>
				<a href='/setting'>Settings</a>
			</div>
		</nav>
	);
}
