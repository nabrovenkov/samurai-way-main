import { MessageType } from '../../..';
import style from './../Dialogs.module.css';


export const Message = ({ message }: MessageType) => {
	return <div className={style.message}>{message}</div>;
};
