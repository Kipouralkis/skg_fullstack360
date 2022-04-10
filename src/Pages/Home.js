import React from 'react'
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import Searchbar from "../components/SearchBar/SearchBar"
import Carousel from "../components/Recommended/Carousel"
import Heading1 from "../components/Headings/Heading1"
import Heading2 from "../components/Headings/Heading2" 
import PropertyList from "../components/propertyList"
import Services from "../components/Services/Services"
import List from "../components/List/List"
import Footer from "../components/Footer/Footer"

import { SearchBar } from "../components/SearchBarTemp";

import styled from "styled-components";



const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8em;
`;


function Home({data}) {
  
  return (
    <div>

        {/* HEADER */}
        <div className="header-div">
          <Header />
          <Navbar className />
          {/* <Searchbar /> // onclick={fetchHouses}  */}
           <AppContainer>
            <SearchBar data={data}/>
           </AppContainer>
        </div>

        {/*CONTENT */}
        <div className="wrapper">
          <h1 className="heading"> Welcome to ~GreatPageName~</h1>

          {/*Recommended section*/}
          <Heading2 title="Our Recommendations:"></Heading2>
          <Carousel data={data} />
        </div>

        {/*PropertyList */}
        <div className="wrapper">
          <Heading1 title="New Listings:"></Heading1>
          <PropertyList data={data} />
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
          <Heading2
            title={[
              "Our Tips ",
              <span className="subtitle">For Finding Your Perfect House</span>,
            ]}
          ></Heading2>
          <List />
        </div>

        <Footer />

    </div>
  )
}

export default Home;
