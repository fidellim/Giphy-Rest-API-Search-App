import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import giphy_logo from "../assets/giphy_logo.svg";
import Switch from "react-switch";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/rootReducer";
import { setIsToggled, setTheme } from "../store/toggleTheme";
import { setSearchGif, setQuery, setIsStart } from "../store/gif";

const MyNavbar = () => {
	const dispatch = useAppDispatch();
	// The `state` arg is correctly typed as `RootState` already
	const { searchGif } = useAppSelector((state: RootState) => state.gif);
	const { isToggled, theme } = useAppSelector(
		(state: RootState) => state.toggle_theme
	);
	const html = document.querySelector("html");

	if (html) html.dataset.theme = theme;

	const handleToggle = () => {
		dispatch(setIsToggled(!isToggled));
		theme === "theme-dark"
			? dispatch(setTheme("theme-light"))
			: dispatch(setTheme("theme-dark"));
	};

	const handleLogo = () => {
		dispatch(setIsStart(true));
		dispatch(setSearchGif(""));
		dispatch(setQuery(searchGif));
	};

	return (
		<>
			<Navbar className="py-3 shadow navbar">
				<Container>
					<Navbar.Brand onClick={handleLogo} style={{ cursor: "pointer" }}>
						<img
							alt=""
							src={giphy_logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
						<h3 className="ms-3 d-inline navbarTitle">Giphy REST API</h3>
					</Navbar.Brand>
					<Switch
						onChange={handleToggle}
						checked={isToggled}
						width={70}
						offColor="#165c9e"
						onColor="#a2d2ff"
						offHandleColor="#003566"
						onHandleColor="#45a5ff"
						handleDiameter={35}
						boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
						activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
						uncheckedIcon={
							<DarkModeIcon
								className="fs-5"
								style={{ marginLeft: 12, color: "white" }}
							/>
						}
						checkedIcon={<LightModeIcon className="fs-5 ms-2" />}
					/>
				</Container>
			</Navbar>
		</>
	);
};

export default MyNavbar;
