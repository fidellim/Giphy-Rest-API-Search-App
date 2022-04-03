import React from "react";
import Container from "react-bootstrap/Container";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/rootReducer";
import { setModalGif } from "../store/gif";
import GridGif from "../components/GridGif";
import { IGif } from "@giphy/js-types";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from "@giphy/react-components";

const GIPHY_API: string = process.env.REACT_APP_GIPHY_API as string;
const giphyFetch = new GiphyFetch(GIPHY_API);

const GifLayout = () => {
	const { query, isStart, modalGif } = useAppSelector(
		(state: RootState) => state.gif
	);
	const dispatch = useAppDispatch();

	return (
		<>
			<Container>
				{!isStart && (
					<GridGif
						onGifClick={(
							gif: IGif,
							e: React.SyntheticEvent<HTMLElement, Event>
						) => {
							e.preventDefault();
							dispatch(setModalGif(gif));
						}}
						fetchGifs={(offset: number) =>
							giphyFetch.search(query, { offset, limit: 10 })
						}
						query={query}
					/>
				)}
				{isStart && (
					<GridGif
						onGifClick={(
							gif: IGif,
							e: React.SyntheticEvent<HTMLElement, Event>
						) => {
							e.preventDefault();
							dispatch(setModalGif(gif));
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
							dispatch(setModalGif(undefined));
						}}
					>
						<Gif gif={modalGif} width={200} />
					</div>
				)}
			</Container>
		</>
	);
};

export default GifLayout;
