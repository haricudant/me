import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Interests.css";

import Carousel from "react-bootstrap/Carousel";

export default class Interests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          name:
            "https://i.pinimg.com/474x/70/95/72/7095729ffebaad631e83821f535a2dd7.jpg",
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
            "https://i.pinimg.com/564x/09/54/86/0954869ade876280e7bd7c573640a9bb.jpg",
          "skill-1": "Django",
          l1: "80",
          "skill-2": "Django-REST",
          l2: "86",
          "skill-3": "Ruby-on-Rails",
          l3: "68",
        },
        {
          name:
            "https://i.pinimg.com/474x/9d/fe/b8/9dfeb8817ad82d4d6cb0bcb33a64ccfa.jpg",
          "skill-1": "Python",

          l1: "80",
          "skill-2": "Javascript",
          l2: "75",
          "skill-3": "Ruby-on-Rails",
          l3: "78",
        },
        {
          name:
            "https://i.pinimg.com/originals/73/9c/38/739c387720671b1b56705bbf19cb0d7e.gif",
          "skill-1": "MYSQL",
          l1: "72",
          "skill-2": "PostgreSQL",
          l2: "68",
          "skill-3": "SQLite",
          l3: "88",
        },
        {
          name:
            "https://i.pinimg.com/474x/8a/f5/4a/8af54a24e78bba6b26552b82c798f232.jpg",
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
          name:
            "https://i.pinimg.com/474x/cd/44/e6/cd44e62b9ddb497ce94c8f44b1d0a33f.jpg",
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
      <div class="container-fluid" style={{}}>
        <Container-fluid></Container-fluid>
        <div class="bgg"></div>
        <div class="bgg bg2"></div>
        <div class="bgg bg3"></div>
        <div>
          <div class="display-4 container text-center">Technical Skills</div>
          <Carousel className="contentt container  bg-transparent jumbotron ">
            {skills.length
              ? skills.map((skill) => (
                  <Carousel.Item>
                    <div class=" container  shadow-lg bg-transparent">
                      <div class="row">
                        {" "}
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                          <b class="display-4 text-center" style={{}}>
                            <img
                              src={skill.name}
                              style={{
                                width: "100%",
                                height: "100%",

                                position: "center",
                                textAlign: "center",
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
                                height="300%"
                                width="200%"
                                font-weight="bold"
                              />

                              <br></br>

                              <ProgressBar
                                variant="info"
                                now={skill.l2}
                                label={skill["skill-2"]}
                                class="pg text-center"
                                height="300%"
                                width="200%"
                                font-weight="bold"
                              />
                              <br></br>
                              <ProgressBar
                                variant="danger"
                                now={skill.l3}
                                label={skill["skill-3"]}
                                class="pg text-center"
                                height="300%"
                                width="200%"
                                font-weight="bold"
                              />
                              <br></br>
                              <h1>
                                <ProgressBar
                                  variant="dark"
                                  now={skill.l4}
                                  label={skill["skill-4"]}
                                  class="pg text-center"
                                  height="300%"
                                  width="200%"
                                  font-weight="bold"
                                />
                              </h1>
                              <br></br>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                ))
              : null}
          </Carousel>
        </div>
      </div>
    );
  }
}
