import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

var rentSale;
var price;
var city;

function GetData(properties) {

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


    //console.log(data);
    //deconstruct the data
    rentSale = properties.for.value;
    price = properties.price.value;
    city = properties.city.value;


    //filter the data and console log
    const result = data.filter((d) => d.for === rentSale);
    console.log(result);

}

export default GetData;

//theloume ta dedomena apo to axios (ksana copypasta)
//implement ta filtra 
//perna ta results se allo page me propertylist component