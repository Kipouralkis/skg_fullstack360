import './App.css';
import Carousel from './components/Recommended/Carousel';
import Navbar from './components/Menu/Navbar/Navbar';
import Header from './components/Header/Header'
import Searchbar from './components/SearchBar/SearchBar'


function App() {
  return (
    <div className='App'>
      <div className='header-div'>
        <Header />
        <Navbar />
        <Searchbar />
      </div>
      <Carousel />
    </div>
    
  );
}

export default App;
