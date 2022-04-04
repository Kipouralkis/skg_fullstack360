import "./App.css";
import Carousel from "./components/Recommended/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Searchbar from "./components/SearchBar/SearchBar";

function App() {
  // const fetchHouses = () => {
  //   fetch("URL you wanna sent a request");
  //   // whenever this function is called it's send a request
  // };
  return (
    <div className="App">
      {/* HEADER */}
      <div className="header-div">
        <Header />
        <Navbar className />
        <Searchbar /> {/* // onclick={fetchHouses}  */}
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
