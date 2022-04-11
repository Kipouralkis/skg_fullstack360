import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

import Carousel from "../components/Recommended/Carousel";
import Heading1 from "../components/Headings/Heading1";
import Heading2 from "../components/Headings/Heading2";
import PropertyList from "../components/propertyList";
import Services from "../components/Services/Services";
import List from "../components/List/List";
import Footer from "../components/Footer/Footer";

import { SearchBar } from "../components/SearchBarTemp";

import styled from "styled-components";

import Chatbot from "react-simple-chatbot";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8em;
`;

function Home({ data }) {
  return (
    <div>
      {/* HEADER */}
      <div className="header-div">
        <Header />
        <Navbar className />

        <AppContainer>
          <SearchBar data={data} />
        </AppContainer>
      </div>

      {/*CONTENT */}
      <div className="transition">
        <div className="heading-div">
          <section className=""></section>
          <h1 className="heading"> Welcome to RealEstate SKGCODE 9</h1>
          <section className="heading-bottom"></section>
        </div>
      </div>

      {/*Recommended section*/}
      <div className="section">
        <div className="wrapper">
          <Heading1 title="Our Recommendations:"></Heading1>
          <Carousel data={data} />
        </div>
        <section class="wave-container">
          <div class="wave"></div>
        </section>
      </div>

      {/*PropertyList */}
      <div className="wrapper">
        <Heading2 title="New Listings:"></Heading2>
        <PropertyList data={data} />
      </div>
      <section class="wave-container-top">
        <div class="wave-top"></div>
      </section>

      {/* Services Section*/}
      <div className="section">
        <div className="wrapper">
          <Heading1 title="Our Services:"></Heading1>
          <Services />
        </div>
        <section class="wave-container">
          <div class="wave"></div>
        </section>
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

      <Chatbot
        speechSynthesis={{ enable: true, lang: "en" }}
        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message:
              "Hi {previousValue}, nice to meet you! Would you like a house for sale or for rent?",
            trigger: "4",
          },
          {
            id: "4",
            options: [
              { value: "sale", label: "for sale", trigger: "6" },
              { value: "rent", label: "for rent", trigger: "5" },
            ],
          },
          {
            id: "5",
            message: "In what price range are you looking to rent?",
            trigger: "7",
          },
          {
            id: "6",
            message: "In what price range are you looking to buy?",
            trigger: "7",
          },
          {
            id: "7",
            user: true,
            trigger: "8",
          },
          {
            id: "8",
            message: "How many square meters?",
            trigger: "9",
          },
          {
            id: "9",
            options: [
              { value: 25, label: "25", trigger:'10' },
              { value: 30, label: "30", trigger:'10' },
              { value: 40, label: "40", trigger:'10' },
              { value: 50, label: "50", trigger:'10' },
              { value: 60, label: "60", trigger:'10' },
              { value: 70, label: "70", trigger:'10' },
            ],
          },
          {
            id:'10',
            message: 'Searching houses for you...: ',
            end:true,
          },
          /*  {
            id: '9',
            triger: '9',
          },*/
        ]}
      />
      <Footer />
    </div>
  );
}

export default Home;
