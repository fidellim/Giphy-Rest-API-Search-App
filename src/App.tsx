import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import SearchBar from "./components/SearchBar";
import ButtonScroll from "./components/ButtonScroll";
import GifLayout from "./layout/GifLayout";

const App = () => {
	return (
		<>
			<MyNavbar />
			<main className="pt-5 pb-3">
				<SearchBar />
				<GifLayout />
			</main>
			<ButtonScroll />
		</>
	);
};

export default App;
