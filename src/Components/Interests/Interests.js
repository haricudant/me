import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Interests.css";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-bootstrap/Carousel";
import { Names } from "./Names";

export default class Interests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          name: "https://image.flaticon.com/icons/svg/2868/2868182.svg",
          "skill-1": "Reactjs",
          l1: "70",
          "skill-2": "HTML5",
          l2: "89",
          "skill-3": "Javascript (ES6) & Typescript",
          l3: "70",
          "skill-4": "Bootstrap",
          l4: "85",
        },
        {
          name:
            "https://www.flaticon.com/premium-icon/icons/svg/3045/3045990.svg",
          "skill-1": "Django",
          l1: "80",
          "skill-2": "Django-REST",
          l2: "86",
          "skill-3": "Ruby-on-Rails",
          l3: "68",
        },
        {
          name: "https://image.flaticon.com/icons/svg/950/950018.svg",
          "skill-1": "Python",

          l1: "80",
          "skill-2": "Javascript",
          l2: "75",
          "skill-3": "Ruby-on-Rails",
          l3: "78",
        },
        {
          name: "https://image.flaticon.com/icons/svg/980/980380.svg",
          "skill-1": "MYSQL",
          l1: "72",
          "skill-2": "PostgreSQL",
          l2: "68",
          "skill-3": "SQLite",
          l3: "88",
        },
        {
          name: "https://image.flaticon.com/icons/svg/960/960496.svg",
          "skill-1":
            "AWS Services ( Solution Architect Ceritified - Associate)",
          l1: "75",
          "skill-2": "Docker Basics",
          l2: "89",
          "skill-3": "Git & Github",
          l3: "89",
          "skill-4": "Jenkins & travis CI",
          l4: "89",
        },
        {
          name: "https://image.flaticon.com/icons/svg/689/689317.svg",
          "skill-1": "Windows",
          l1: "85",
          "skill-2": "Linux",
          l2: "83",
          "skill-3": "CentOS",
          l3: "79",
        },
      ],
    };
  }

  render() {
    const { skills } = this.state;

    return (
      <div
        class="container-fluid "
        style={{
          background: "#fffff1",
          paddingBottom: "40px",
          paddingTop: "40px",
        }}
      >
        <div>
          <div class="display-4 container text-center">Technical Skills</div>
<br></br>
          <Carousel className="card bg-transparent container jumbotronBG ">
            {skills.length
              ? skills.map((skill) => (
                  <Carousel.Item>
                    <div class="  ">
                      <div class="row">
                        {" "}
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                          <b class="text-center" style={{}}>
                            <img
                              src={skill.name}
                              style={{
                                width: "100%",
                                height: "100%",
                              }}
                              alt="Italian Trulli"
                            />
                          </b>
                          <br></br>
                        </div>
                        <div class="col-sm-6 col-md-8 col-lg-9 col-xl-9">
                          <br></br>
                          <ul>
                            {" "}
                            <div class="">
                              <ProgressBar
                                variant="success"
                                now={skill.l1}
                                label={skill["skill-1"]}
                                class="pg text-center"
                                height="100%"
                                width="100%"
                                font-weight="bold"
                              />

                              <br></br>

                              <ProgressBar
                                variant="info"
                                now={skill.l2}
                                label={skill["skill-2"]}
                                class="progress-bar"
                                height="100%"
                                width="100%"
                                font-weight="bold"
                              />
                              <br></br>
                              <ProgressBar
                                variant="danger"
                                now={skill.l3}
                                label={skill["skill-3"]}
                                class="pg text-center"
                                height="100%"
                                width="100%"
                                font-weight="bold"
                              />
                              <br></br>
                              <h1>
                                <ProgressBar
                                  variant="dark"
                                  now={skill.l4}
                                  label={skill["skill-4"]}
                                  class="pg text-center"
                                  height="100%"
                                  width="100%"
                                  font-weight="bold"
                                />
                              </h1>
                              <br></br>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))
              : null}
          </Carousel>
        </div>
      </div>
    );
  }
}
