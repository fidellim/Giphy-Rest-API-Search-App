import React, { useState } from "react";
import NoResultFound from "./NoResultFound";
import { Grid } from "@giphy/react-components";
import { IGif } from "@giphy/js-types";
import ResizeObserver from "react-resize-observer";
import { GifsResult } from "@giphy/js-fetch-api";

type Props = {
	onGifClick: (gif: IGif, e: React.SyntheticEvent<HTMLElement, Event>) => void;
	query: string;
	fetchGifs: (offset: number) => Promise<GifsResult>;
};

const GridGif = ({ onGifClick, fetchGifs, query }: Props) => {
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

export default GridGif;
