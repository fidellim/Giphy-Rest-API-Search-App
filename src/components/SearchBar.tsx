import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { GifsResult, GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid } from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";
import { IGif } from "@giphy/js-types";
import NoResultFound from "./NoResultFound";

const GIPHY_API: string = process.env.REACT_APP_GIPHY_API as string;
const giphyFetch = new GiphyFetch(GIPHY_API);

type Props = {
	onGifClick: (gif: IGif, e: React.SyntheticEvent<HTMLElement, Event>) => void;
	query: string;
	fetchGifs: (offset: number) => Promise<GifsResult>;
};

const GridDemo = ({ onGifClick, fetchGifs, query }: Props) => {
	const [width, setWidth] = useState(window.innerWidth - 20);
	return (
		<>
			<Grid
				key={query}
				onGifClick={onGifClick}
				fetchGifs={fetchGifs}
				noResultsMessage={<NoResultFound />}
				width={width}
				columns={3}
				gutter={15}
				borderRadius={10}
			/>
			<ResizeObserver
				onResize={({ width }) => {
					setWidth(width - 20);
				}}
			/>
		</>
	);
};

const SearchBar = () => {
	const [searchGif, setSearchGif] = useState<string>("");
	const [query, setQuery] = useState<string>(searchGif);
	const [isStart, setIsStart] = useState<boolean>(true);
	const [modalGif, setModalGif] = useState<IGif>();

	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setQuery(searchGif);
		setIsStart(false);
	};

	const handleCloseBtn = () => {
		setSearchGif("");
	};

	const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchGif(e.target.value);
	};

	return (
		<>
			<main className="pt-5 pb-3">
				<Container>
					<div className="row justify-content-center">
						<form className="col-12 col-md-9 d-flex flex-column flex-sm-row py-3 align-items-center justify-content-center">
							<div className="position-relative col-12 col-sm-8 me-sm-2 mb-2 mb-sm-0">
								<SearchIcon className="search-icon fs-3 position-absolute top-50 start-0 translate-middle ms-5" />
								<input
									// data-testid="inputUser"
									type="text"
									className="search-bar w-100 py-2 ps-6 pe-2 rounded-3"
									placeholder="Search a GIF"
									value={searchGif}
									onChange={updateSearch}
								/>
								<CloseIcon
									className={`close-icon fs-3 position-absolute top-50 end-0 translate-middle me-2 ${
										searchGif ? "fadeIn" : "fadeOut"
									}`}
									onClick={handleCloseBtn}
								/>
							</div>

							<button
								className="search-button button col-12 col-sm-4 border-0 py-2 rounded"
								onClick={handleSearch}
							>
								Search
							</button>
						</form>
					</div>
				</Container>
				<Container>
					{!isStart && (
						<GridDemo
							onGifClick={(
								gif: IGif,
								e: React.SyntheticEvent<HTMLElement, Event>
							) => {
								// console.log("gif", gif);
								e.preventDefault();
								setModalGif(gif);
							}}
							fetchGifs={(offset: number) =>
								giphyFetch.search(query, { offset, limit: 10 })
							}
							query={query}
						/>
					)}
					{isStart && (
						<GridDemo
							onGifClick={(
								gif: IGif,
								e: React.SyntheticEvent<HTMLElement, Event>
							) => {
								e.preventDefault();
								setModalGif(gif);
							}}
							fetchGifs={(offset: number) =>
								giphyFetch.trending({ offset, limit: 10 })
							}
							query={"trending"}
						/>
					)}
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
