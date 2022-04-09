import React from 'react'
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import Searchbar from "../components/SearchBar/SearchBar"
import Heading1 from "../components/Headings/Heading1"
import PropertyList from "../components/propertyList"
import Footer from "../components/Footer/Footer"


import { useState, useEffect } from "react";
import axios from "axios";

function ForSale() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/property/all"
        );
        setData(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div>

        {/* HEADER */}
        <div className="header-div">
          <Header />
          <Navbar className />
          <Searchbar /> {/* // onclick={fetchHouses}  */}
        </div>

        {/*CONTENT */}

        {/*PropertyList */}
        <div className="wrapper">
          <Heading1 title="Houses for Sale"></Heading1>
        </div>

        <PropertyList data={data} />

        <Footer />

    </div>
  )
}

export default ForSale;
