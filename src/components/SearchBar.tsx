import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import SearchIcon from "@mui/icons-material/Search";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";
import { IGif } from "@giphy/js-types";

const GIPHY_API: string = process.env.REACT_APP_GIPHY_API as string;
const giphyFetch = new GiphyFetch(GIPHY_API);

type Props = {
	onGifClick: (gif: IGif, e: React.SyntheticEvent<HTMLElement, Event>) => void;
	searchName: string;
};

const GridDemo = ({ onGifClick, searchName }: Props) => {
	const fetchGifs = (offset: number) =>
		giphyFetch.search(searchName, { offset, limit: 10 });
	const [width, setWidth] = useState(window.innerWidth);
	return (
		<>
			<Grid
				onGifClick={onGifClick}
				fetchGifs={fetchGifs}
				width={width}
				columns={5}
				gutter={6}
			/>
			<ResizeObserver
				onResize={({ width }) => {
					setWidth(width);
				}}
			/>
		</>
	);
};

const SearchBar = () => {
	const [modalGif, setModalGif] = useState<IGif>();
	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<main className="pt-5 pb-3">
				<Container>
					<form className="d-flex py-3 align-items-center justify-content-center">
						<div className="position-relative w-50 me-2">
							<SearchIcon className="search-icon fs-3 position-absolute top-50 start-0 translate-middle ms-5" />
							<input
								// data-testid="inputUser"
								type="text"
								className="search-bar w-100 py-2 ps-6 pe-2 rounded"
								placeholder="Search a GIF"
								// value=""
								// onChange={}
							/>
						</div>

						<button
							className="search-button button border-0 py-2 px-5 rounded"
							onClick={handleSearch}
						>
							Search
						</button>
					</form>
				</Container>
				<Container>
					<GridDemo
						onGifClick={(
							gif: IGif,
							e: React.SyntheticEvent<HTMLElement, Event>
						) => {
							// console.log("gif", gif);
							e.preventDefault();
							setModalGif(gif);
						}}
						searchName="cat"
					/>
					{modalGif && (
						<div
							style={{
								position: "fixed",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								background: "rgba(0, 0, 0, .8)",
							}}
							onClick={(e) => {
								e.preventDefault();
								setModalGif(undefined);
							}}
						>
							<Gif gif={modalGif} width={200} />
						</div>
					)}
				</Container>
			</main>
		</>
	);
};

export default SearchBar;
