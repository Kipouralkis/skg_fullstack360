import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

import Heading1 from "../components/Headings/Heading1";
import Footer from "../components/Footer/Footer";
import { SearchBar } from "../components/SearchBarTemp";
import styled from "styled-components";
import LandpageProp from "../components/landingProperty/landpageProp";



function ForRent({data}) {
  
  const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8em;
`;

  return (
    <div>
      {/* HEADER */}
      <div className="header-div">
        <Header />
        <Navbar className />
         <AppContainer>
            <SearchBar data={data}/>
           </AppContainer>
      </div>

      {/*CONTENT */}

      
      <div className="wrapper">
        <LandpageProp data={data}/>
      </div>

      <Footer />
      
    </div>
  );
}

export default ForRent;