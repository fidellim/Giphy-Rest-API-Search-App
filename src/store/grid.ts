import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GridState {
	width: number;
}

// Define the initial state using that type
const initialState: GridState = {
	width: window.innerWidth - 20,
};

const gridSlice = createSlice({
	name: "grid",
	initialState,
	reducers: {
		setWidth: (state, action: PayloadAction<number>) => {
			state.width = action.payload;
		},
	},
});

export const { setWidth } = gridSlice.actions;

export default gridSlice.reducer;
