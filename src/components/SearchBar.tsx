import React from "react";
import Container from "react-bootstrap/Container";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
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
			</main>
		</>
	);
};

export default SearchBar;
