import { combineReducers } from "@reduxjs/toolkit";
import scroll_reducer from "./scroll";
import toggle_theme_reducer from "./toggleTheme";
import gif_reducer from "./gif";

const rootReducer = combineReducers({
	scroll: scroll_reducer,
	toggle_theme: toggle_theme_reducer,
	gif: gif_reducer,
});

export default rootReducer;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
