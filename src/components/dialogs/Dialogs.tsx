import { DialogType, MessageType } from '../..';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogs_item/DialogItem';
import { Message } from './messages/Message';

export const Dialogs = ({dialogs, messages}: {dialogs: Array<DialogType>, messages: MessageType[]}) => {

	const dialogsElements = dialogs.map((d) => (
		<DialogItem id={d.id} name={d.name} />
	)); 
	const messagesElements = messages.map((m) => <Message message={m.message} />);
	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>{dialogsElements}</div>
			<div className={style.messages}>{messagesElements}</div>
		</div>
	);
};
