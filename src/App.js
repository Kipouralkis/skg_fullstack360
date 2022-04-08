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
import PropertyList from "./components/propertyList"

import {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  
const [data, setData] = useState([]);

useEffect(()=> {
  const fetchData = async ()=>{

  try {
    const response = await axios.get('http://localhost:5000/api/property/all');
    setData(response.data);
  } catch (err) {
    if(err.response){
      console.log(err.response.data);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
  }
  fetchData();
  
},[])




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
        <Carousel data={data}/>
      </div>

      {/*PropertyList */}
      <div className="wrapper">
            <Heading1 title="PropertyList:"></Heading1>
          </div>
      
        <PropertyList data={data} />

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
