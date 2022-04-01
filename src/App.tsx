import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import SearchBar from "./components/SearchBar";
import ButtonScroll from "./components/ButtonScroll";

const App = () => {
	return (
		<div>
			<MyNavbar />
			<SearchBar />
			<ButtonScroll />
		</div>
	);
};

export default App;
