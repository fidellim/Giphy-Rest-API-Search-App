import React from "react";
import Container from "react-bootstrap/Container";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { RootState } from "../store/rootReducer";
import { setSearchGif, setQuery, setIsStart } from "../store/gif";

const SearchBar = () => {
	// The `state` arg is correctly typed as `RootState` already
	const { searchGif } = useAppSelector((state: RootState) => state.gif);
	const dispatch = useAppDispatch();

	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(setQuery(searchGif));
		dispatch(setIsStart(false));
	};

	const handleCloseBtn = () => {
		dispatch(setSearchGif(""));
	};

	const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchGif(e.target.value));
	};

	return (
		<>
			<Container>
				<div className="row justify-content-center">
					<form className="col-12 col-md-9 d-flex flex-column flex-sm-row py-3 align-items-center justify-content-center">
						<div className="position-relative col-12 col-sm-8 me-sm-2 mb-2 mb-sm-0">
							<SearchIcon className="search-icon fs-3 position-absolute top-50 start-0 translate-middle ms-5" />
							<input
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
		</>
	);
};

export default SearchBar;
