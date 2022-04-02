import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import SearchBar from "./components/SearchBar";
import ButtonScroll from "./components/ButtonScroll";

const App = () => {
	return (
		<>
			<MyNavbar />
			<SearchBar />
			<ButtonScroll />
		</>
	);
};

export default App;
