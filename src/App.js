import React, { Component } from "react";
import Landing from "./Components/Landing/Landing.js";
import Jumbotron from "./Components/Jumbotron/Jumbotron.js";
import Work from "./Components/works/Work.js";
import Interests from "./Components/Interests/Interests.js";
import Contact from "./Components/Contact/Contact.js";


export default class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Jumbotron />
        <Work />
        <Interests />

        <Contact/>
      
      </div>
    );
  }
}
