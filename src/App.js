/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./Pages/Home"


import { useState, useEffect } from "react";
import axios from "axios";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ForSale from "./Pages/ForSale";
import ForRent from "./Pages/ForRent";
import Chatbot from 'react-simple-chatbot';


function App() {
  //all data
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
    
    <Router>
   
      <Routes>
        <Route path="/" element={<Home data={data}/>}/>
        <Route path="/for_sale" element={<ForSale data={data} />}/>
        <Route path="/for_rent" element={<ForRent data={data} />}/>
      </Routes>
      <Chatbot
  steps={[
    {
      id: '1',
      message: 'Hello! What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, how can i help you? Do you want a house for sale or for rent?',
      trigger: '4',
    },
    {
      id: '4',
      options: [
          { value: 1, label: 'for sale', trigger: '5' },
          { value: 2, label: 'for rent', trigger: '6' },
      ],
    },
    {
      id: '5',
      message: 'How many square meters?',
      trigger: '7',
    },
    {
      id: '6',
      message: 'How many square meters?',
      trigger: '8',
    },
    {
      id: '7',
      options: [
          { value: 1, label: '25', trigger: '9' },
          { value: 2, label: 'for rent', trigger: '10' },
          { value: 1, label: '25', trigger: '11' },
          { value: 2, label: 'for rent', trigger: '12' },
          { value: 1, label: '25', trigger: '13' },
          { value: 2, label: 'for rent', trigger: '14' },
      ],
    },
    {
      id: '8',
      options: [
          { value: 1, label: 'for sale', trigger: '15' },
          { value: 2, label: 'for rent', trigger: '16' },
          { value: 1, label: '25', trigger: '17' },
          { value: 2, label: 'for rent', trigger: '18' },
          { value: 1, label: '25', trigger: '19' },
          { value: 2, label: 'for rent', trigger: '20' },
      ],
    },
    {
      id: '9',
      triger: '9',
    },
  ]}
/>
    </Router>
    
  );
}

export default App;
