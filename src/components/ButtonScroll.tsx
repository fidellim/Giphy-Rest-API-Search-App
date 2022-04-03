import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { RootState } from "../store/rootReducer";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setShowScroll } from "../store/scroll";

const ButtonScroll = () => {
	// When the user scrolls down 20px from the top of the document, show the button
	const { showScroll } = useAppSelector((state: RootState) => state.scroll);
	const dispatch = useAppDispatch();

	const scrollFunction = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			dispatch(setShowScroll(true));
		} else {
			dispatch(setShowScroll(false));
		}
	};

	const scrollTop = () => {
		dispatch(setShowScroll(false));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", scrollFunction);

	return (
		<>
			<button
				onClick={scrollTop}
				className={`buttonScroll ${
					showScroll ? "fadeIn" : ""
				} position-fixed end-1 bottom-2 border-0 rounded-3`}
			>
				<ArrowUpwardIcon className="up-arrow-icon fs-3" />
			</button>
		</>
	);
};

export default ButtonScroll;
