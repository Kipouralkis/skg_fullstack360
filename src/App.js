import "./App.css";
import Carousel from "./components/Recommended/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Searchbar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer"
import Heading2 from "./components/Headings/Heading2";

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
        <Heading2 title="Our Recommendations:"></Heading2>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
