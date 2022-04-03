import { IGif } from "@giphy/js-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GifState {
	searchGif: string;
	query: string;
	isStart: boolean;
	modalGif?: IGif;
}

// Define the initial state using that type
const initialState: GifState = {
	searchGif: "",
	query: "",
	isStart: true,
	modalGif: undefined,
};

const gifSlice = createSlice({
	name: "gif",
	initialState,
	reducers: {
		setSearchGif: (state, action: PayloadAction<string>) => {
			state.searchGif = action.payload;
		},
		setQuery: (state, action: PayloadAction<string>) => {
			state.query = action.payload;
		},
		setIsStart: (state, action: PayloadAction<boolean>) => {
			state.isStart = action.payload;
		},
		setModalGif: (state, action?: PayloadAction<IGif | undefined>) => {
			state.modalGif = action?.payload;
		},
	},
});

export const { setSearchGif, setQuery, setIsStart, setModalGif } =
	gifSlice.actions;

export default gifSlice.reducer;
