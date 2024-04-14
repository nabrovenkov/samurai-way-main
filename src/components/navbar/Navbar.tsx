import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

export function Navbar() {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink
					to='/profile'
					className={({ isActive }) => (isActive ? s.act : s.def)}
				>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs' className={({ isActive }) => (isActive ? s.act : s.def)}>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news' className={({ isActive }) => (isActive ? s.act : s.def)}>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' className={({ isActive }) => (isActive ? s.act : s.def)}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/setting' className={({ isActive }) => (isActive ? s.act : s.def)}>
					Settings
				</NavLink>
			</div>
		</nav>
	);
}
