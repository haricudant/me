import React, { Component } from "react";
import "./Landing.css";
import Typical from "react-typical";
import Clock from "react-live-clock";
import { useHistory } from "react-router-dom";
import { NavButton, PlusButton } from "react-svg-buttons";
// import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
export default class Landing extends Component {
  
  render() {
    return (
      <div
        class="landing container-fluid jumbotronBG"
        style={{ fontFamily: "Montserrat", color: "white" }}
      >
        <div class="container jumbotronBG">
          <div class="text-center">
            <p class="">
              {" "}
              Wait untill your{" "}
              <Clock
                class=" "
                format={"HH:mm:ss A"}
                ticking={true}
                timezone={"UK/London"}
              />{" "}
              comes
            </p>
            <p>
              <br></br>
            </p>
          </div>

          <div
            class="container-fluid jumbotronBG text-center"
            style={{ fontFamily: "Montserrat", color: "white" }}
          >
            <NavButton
              direction="down"
              type="arrowDown"
              size={120}
              thickness={8}
              color="white"
              opened={false}
            />

            <h1 className="display-4 ">
              <pre
                class="htmlcode"
                style={{ color: "white", fontFamily: "Montserrat" }}
              >
                &lt;Hii..!&gt;
              </pre>
            </h1>
            <p></p>
            <h1
              className="display-1 mq"
              style={{ fontFamily: "Montserrat", color: "white" }}
            >
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
                wrapper="display-1"
              />
              <br></br>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
