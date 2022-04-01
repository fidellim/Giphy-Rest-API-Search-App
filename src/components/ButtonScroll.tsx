import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ButtonScroll = () => {
	// When the user scrolls down 20px from the top of the document, show the button
	const [showScroll, setShowScroll] = useState<boolean>(false);

	const scrollFunction = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			setShowScroll(true);
		} else {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		setShowScroll(false);
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
