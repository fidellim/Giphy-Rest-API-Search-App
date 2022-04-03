import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ScrollState {
	showScroll: boolean;
}

// Define the initial state using that type
const initialState: ScrollState = {
	showScroll: false,
};

const scrollSlice = createSlice({
	name: "scroll",
	initialState,
	reducers: {
		setShowScroll: (state, action: PayloadAction<boolean>) => {
			state.showScroll = action.payload;
		},
	},
});

export const { setShowScroll } = scrollSlice.actions;

export default scrollSlice.reducer;
