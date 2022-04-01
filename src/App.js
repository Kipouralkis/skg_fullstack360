import "./App.css";
import Carousel from "./components/Recommended/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Searchbar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <div className="header-div">
        <Header />
        <Navbar className />
        <Searchbar />
      </div>

      {/*CONTENT */}
      <div id="wrapper">
        <h1 className="heading"> Welcome to ~GreatPageName~</h1>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
