import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <SearchBar />
    </div>
  )
}

export default App