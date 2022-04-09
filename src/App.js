import "./App.css";
import Home from "./Pages/Home"

import { useState, useEffect } from "react";
import axios from "axios";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ForSale from "./Pages/ForSale";
import ForRent from "./Pages/ForRent";


function App() {
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
        <Route path="/" element={<Home />}/>
        <Route path="/for_sale" element={<ForSale />}/>
        <Route path="/for_rent" element={<ForRent />}/>
      </Routes>
    </Router>
  );
}

export default App;
