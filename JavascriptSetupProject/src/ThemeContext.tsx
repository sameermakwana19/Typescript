import { createContext } from "react";

type StateType = {
	theme: string;
	fontSize: number;
};

type ThemeActionType = {
	type: "SET_THEME";
	payload: string;
};

type FontSizeActionType = {
	type: "SET_FONT_SIZE";
	payload: number;
};

type ActionType = ThemeActionType | FontSizeActionType;

const INITIAL_STATE: StateType = {
	theme: "light",
	fontSize: 16,
};

function reducer(state: StateType, action: ActionType): StateType {
	switch (action.type) {
		case "SET_THEME":
			return { ...state, theme: action.payload };
		case "SET_FONT_SIZE":
			return { ...state, fontSize: action.payload };
		default:
			return state;
	}
}

export const ThemeContext = createContext<{
	state: StateType;
	dispatch: React.Dispatch<ActionType>;
}>({
	state: INITIAL_STATE,
	dispatch: () => {},
});
