import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ToggleThemeState {
	isToggled: boolean;
	theme: string;
}

// Define the initial state using that type
const initialState: ToggleThemeState = {
	isToggled: false,
	theme: "theme-light",
};

const toggleThemeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setIsToggled: (state, action: PayloadAction<boolean>) => {
			state.isToggled = action.payload;
		},
		setTheme: (state, action: PayloadAction<string>) => {
			state.theme = action.payload;
		},
	},
});

export const { setIsToggled, setTheme } = toggleThemeSlice.actions;

export default toggleThemeSlice.reducer;
