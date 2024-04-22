import style from './Dialogs.module.css';
import { DialogItem } from './dialogs_item/DialogItem';
import { Message } from './messages/Message';

export const Dialogs = ({state}: any) => {

	const dialogsElements = state.dialogs.map((d) => (
		<DialogItem id={d.id} name={d.name} />
	)); 
	const messagesElements = state.messages.map((m) => <Message message={m.message} />);
	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>{dialogsElements}</div>
			<div className={style.messages}>{messagesElements}</div>
		</div>
	);
};
