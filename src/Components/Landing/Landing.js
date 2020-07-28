import React, { Component } from "react";
import "./Landing.css";
import Typical from "react-typical";
import Clock from "react-live-clock";
import log from "../../log.jpg";

export default class Landing extends Component {
  render() {
    return (
      <div class="landing">
        <div class="float-md-right">
          <Clock
            class="lead  text-center"
            format={"HH:mm:ss a"}
            ticking={true}
            timezone={"UK/London"}
          />
        </div>
        <div class="container jumbotronBG  text-center">
          <h1 className="display-1" style={{ color: "white" }}>
            Hi!
          </h1>
          <h2 className="display-3 ">
            I am
            <Typical
              steps={[
                " Hari Narayanan",
                1000,
                " a learner",
                1000,
                " an Aspiring developer",
                1000,
                " a musician",
                1000,
              ]}
              loop={Infinity}
              wrapper="display-3"
            />
            <br></br>
            <button class="glow-on-hover text-center" type="button">
              Portfolio
            </button>
          </h2>
        </div>
      </div>
    );
  }
}
