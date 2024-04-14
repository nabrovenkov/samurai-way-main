export type DialogType = {
	name: string;
	id: number;
};

export type MessageType = {
	message: string;
	id: number;
};

export type PostType = {
	id: number;
	message: string;
	like: number;
};

export type StateType = {
	profilePage: {
		posts: Array<PostType>;
	};
	messagePage: {
		dialogs: Array<DialogType>;
		messages: Array<MessageType>;
	};
};

export const state: StateType = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hi, how are you?', like: 8 },
			{ id: 2, message: "It's my firs post", like: 15 },
		],
	},
	messagePage: {
		dialogs: [
			{ id: 1, name: 'Alexey' },
			{ id: 2, name: 'Olga' },
			{ id: 3, name: 'Sveta' },
			{ id: 4, name: 'Dmitriy' },
			{ id: 5, name: 'Anton' },
		],
		messages: [
			{ id: 1, message: 'Hello' },
			{ id: 2, message: 'How are you?' },
			{ id: 3, message: 'What is your name?' },
		],
	},
};
