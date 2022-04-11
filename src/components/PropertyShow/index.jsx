import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import LandpageProp from "../landingProperty/landpageProp";
import house from "../assets/house.jpg";

const TvShowContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;

  img {
    width: 150px;
    height: 90px;
    border-radius: 10px;
  padding: 5px;
  }
`;

const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;
const City = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;
const Address = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;




export function TvShow(props) {
  const { thumbanilSrc, name, rating, address, city, id } = props;

  return (
    <TvShowContainer>
        <Link to={`/property/${id}`} component={<LandpageProp/>}>
          <Thumbnail>
           {!thumbanilSrc && <img src={house}/> }
          {thumbanilSrc && <img src={thumbanilSrc} alt={{id}}/>}
          </Thumbnail>
      </Link>
      <Name>{name}</Name>
      <City>{city}</City>
      <Address>{address}</Address>
      <Rating>{rating || "N/A"} euro</Rating>
    </TvShowContainer>
  );
}
