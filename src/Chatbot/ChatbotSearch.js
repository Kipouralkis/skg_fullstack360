import React, { Component } from "react";
import PropTypes from "prop-types";
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import DoSearch from "./Search";
import GetData from "./GetData";
import { buttonBaseClasses } from "@mui/material";

//THEME //

const theme = {
  background: "var(--light-shades)",
  headerBgColor: "var(--test)",
  headerFontColor: "#f3f6fc",
  headerFontSize: "20px",
  botBubbleColor: "var(--gray-blue)",
  botFontColor: "#f3f6fc",
  userBubbleColor: "#f3f6fc",
  userFontColor: "#4a4a4a",
};

const config = {
  width: "400px",
  height: "500px",
  floating: true,
  headerTitle: "FullStack360",
};

//END OF THEME //

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      to: "",
      price: "",
      city: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { to, price, city } = steps;

    this.setState({ to, price, city });
  }

  exportvalues() {
    return this.state;
  }

  render() {
    const { to, price, city } = this.state;

    //checking values
    //console.log(this.state.city.value);
    //console.log(this.state.to.value);
    //console.log(this.state.price.value);

    //<GetData data={this.state} />

    return (
      <div style={{ width: "100%" }}>
        <p>
          Looking for a house... <br></br>
        </p>
        <table>
          <tbody>
            <tr>
              <td>for </td>
              <td>{to.value}</td>
            </tr>
            <tr>
              <td>with </td>
              <td> {price.value}€</td>
            </tr>
            <tr>
              <td>in </td>
              <td>{city.value}</td>
            </tr>
          </tbody>
        </table>
        <a href="/rent" onClick={<GetData data={this.state} />}>
          Click here to see your results
        </a>
      </div>
      //trying to pass variables to another component
    );
  }
}

Search.propTypes = {
  steps: PropTypes.object,
};

Search.defaultProps = {
  steps: undefined,
};
class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Chatbot
          speechSynthesis={{ enable: true, lang: "en" }}
          steps={[
            {
              id: "1",
              message: "Hello! What's your name?",
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
              trigger: "to",
            },
            {
              id: "to",
              options: [
                { value: "sale", label: "for sale", trigger: "6" },
                { value: "rent", label: "for rent", trigger: "5" },
              ],
            },
            {
              id: "5",
              message: "In what price range are you looking to rent?",
              trigger: "price",
            },
            {
              id: "6",
              message: "In what price range are you looking to buy?",
              trigger: "price",
            },
            {
              id: "price",
              user: true,
              trigger: "8",
            },
            {
              id: "8",
              message: "Where?",
              trigger: "city",
            },
            {
              id: "city",
              options: [
                { value: "Thess", label: "Thessaloniki", trigger: "10" },
                { value: "Athens", label: "Athens", trigger: "10" },
              ],
            },
            {
              id: "10",
              component: <Search />,
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default SimpleForm;
