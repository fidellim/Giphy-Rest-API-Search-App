import React from "react";
import { Container } from "react-bootstrap";
import no_result_img from "../assets/no_result_found.png";

const NoResultFound = () => {
	return (
		<Container className="d-flex flex-column justify-content-center align-items-center">
			<div className="no-result d-flex flex-column align-items-center my-4 py-5 px-5 text-center">
				<img
					className="no-result-img .d-block h-auto mb-4"
					src={no_result_img}
					alt="no result"
				/>
				<h2>Sorry! No result found 😔</h2>
				<p>Please try to search again!</p>
			</div>
		</Container>
	);
};

export default NoResultFound;
