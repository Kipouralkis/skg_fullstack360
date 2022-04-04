import "./App.css";
import Carousel from "./components/Recommended/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Searchbar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import Heading2 from "./components/Headings/Heading2";
import Heading1 from "./components/Headings/Heading1";
import Services from "./components/Services/Services";
import List from "./components/List/List";

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
      <div className="wrapper">
        <h1 className="heading"> Welcome to ~GreatPageName~</h1>

        {/*Recommended section*/}
        <Heading2 title="Our Recommendations:"></Heading2>
        <Carousel />
      </div>

      {/* Services Section*/}
      <div className="section">
        <div className="wrapper">
          <Heading1 title="Our Services:"></Heading1>
          <Services />
        </div>
      </div>

      {/*Tips section*/}
      <div className="wrapper">
        <Heading2 title={["Our Tips ", <span className="subtitle">For Finding Your Perfect House</span>]}></Heading2>
        <List/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
