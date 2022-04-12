import React, { Component } from "react";
import axios from "axios";
import { SearchBar } from "../components/SearchBarTemp";

/*
class Search extends Component {
  //getting user unput from steps property
  constructor(props) {
    super(props);

    //Assign the steps property as a const variable equal to this.props
    const { steps } = this.props;
    //assign steps equal to the variable steps
    const { to, price, city } = steps;

    //assign the initial state, this.state, as each user step
    this.state = { to, price, city };
  }

  function logout(params) {
      console.log(params);
  }
}
*/

function DoSearch({props}){
    console.log(props.city);
}

export default DoSearch;
