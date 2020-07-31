import React, { Component } from "react";
import "./Landing.css";
import Typical from "react-typical";
import Clock from "react-live-clock";
import Jumbotron from "../Jumbotron/Jumbotron";
import { NavButton, PlusButton } from "react-svg-buttons";
// import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
export default class Landing extends Component {
  render() {
    return (
      
        <div class="landing container-fluid jumbotronBG">
          <div class="container jumbotronBG">
            <div class="text-center">
              <p class="lead">
                {" "}
                Wait untill your{" "}
                <Clock
                  class="lead caption"
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

            <div class="container-fluid jumbotronBG text-center">
              
                <NavButton
                  direction="down"
                  type="arrowDown"
                  size={120}
                  thickness={8}
                  color="#33ff4e"
                  opened={false}
                />
            
              <h1 className="display-3 mq">
                <pre class="htmlcode display-4" style={{ color: "#33ff4e" }}>
                  &lt;Hii..!&gt;
                </pre>
              </h1>
              <p></p>
              <h1 className="display-1 mq">
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
