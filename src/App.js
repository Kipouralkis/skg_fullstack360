import './App.css';
import Carousel from './components/Recommended/Carousel';
import Navbar from './components/Menu/Navbar/Navbar';
import Header from './components/Header/Header'
import Searchbar from './components/SearchBar/SearchBar'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Searchbar />
      <Carousel />
    </div>
    
  );
}

export default App;
