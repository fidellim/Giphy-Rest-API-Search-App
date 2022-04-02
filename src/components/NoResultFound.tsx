import React from "react";
import { Container } from "react-bootstrap";
import no_result_img from "../assets/no_result_found.png";

const NoResultFound = () => {
	return (
		<Container className="no-result-container">
			<div className="no-result">
				<img
					className="no-result-img .d-block"
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
