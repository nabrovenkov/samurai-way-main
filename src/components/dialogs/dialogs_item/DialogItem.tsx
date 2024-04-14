import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';
import { DialogType } from '../../..';

export const DialogItem = ({ name, id }: DialogType) => {
	const path = `/dialogs/${id}`;

	return (
		<div className={style.dialog + ' ' + style.active}>
			<NavLink to={path}>{name}</NavLink>
		</div>
	);
};
