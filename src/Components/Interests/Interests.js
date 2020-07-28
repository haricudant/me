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
          name: "Front End",
          "skill-1": "Reactjs",
          l1: "70",
          "skill-2": "HTML5",
          l2: "89",
          "skill-3": "Javascript",
          l3: "70",
          "skill-4": "Bootstrap",
          l4: "85",
        },
        {
          name: "Back End",
          "skill-1": "Django",
          l1: "80",
          "skill-2": "Django-REST",
          l2: "86",
          "skill-3": "Ruby-on-Rails",
          l3: "68",
        },
        {
          name: "Coding languages",
          "skill-1": "Python",
          l1: "80",
          "skill-2": "Javascript",
          l2: "75",
          "skill-3": "Ruby-on-Rails",
          l3: "78",
        },
        {
          name: "Databases",
          "skill-1": "MYSQL",
          l1: "72",
          "skill-2": "PostgreSQL",
          l2: "68",
          "skill-3": "SQLite",
          l3: "88",
        },
        {
          name: "AWS & DevOps",
          "skill-1":
            "AWS Services ( IAM, EC2, ECS, RDS, Route 53, VPC, Lambda, S3, CloudWatch, API gateway, CloudTrail, SQS, SNS)",
          l1: "75",
          "skill-2": "Docker Basics",
          l2: "89",
          "skill-3": "Git & Github",
          l3: "89",
          "skill-4": "Jenkins & travis CI",
          l4: "89",
        },
        {
          name: "OS",
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
        class="container  jumbotronBG c"
        style={{  }}
      >
        <div class="bgg"></div>
        <div class="bgg bg2"></div>
        <div class="bgg bg3"></div>
        <div >
          <Carousel className="content">
            {skills.length
              ? skills.map((skill) => (
                  <Carousel.Item>
                    <div class="card">
                      <div class="row">
                        {" "}
                        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                          <p class="text-center">{skill.name}</p>
                        </div>
                        <div class="col-sm-6 col-md-8 col-lg-9 col-xl-10">
                          <ul>
                            {" "}
                            <div class="">
                              <ProgressBar
                                variant="success"
                                animated
                                now={skill.l1}
                                label={skill["skill-1"]}
                              />

                              <br></br>

                              <ProgressBar
                                variant="info"
                                animated
                                now={skill.l2}
                                label={skill["skill-2"]}
                              />
                              <br></br>
                              <ProgressBar
                                variant="warning"
                                animated
                                now={skill.l3}
                                label={skill["skill-3"]}
                              />
                              <br></br>
                              <h1>
                                <ProgressBar
                                  variant="danger"
                                  animated
                                  now={skill.l4}
                                  label={skill["skill-4"]}
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
        

        {/* {/* <Carousel class ="coros" style={{ height: "80%", width: "100%" }}>
          {skills.length
            ? skills.map((skill) => (
                <div class="card">
                  <div class="row">
                    {" "}
                    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                      <p class="text-center">{skill.name}</p>
                    </div>
                    <div class="col-sm-6 col-md-8 col-lg-9 col-xl-10">
                      <ul>
                        {" "}
                        <div class="">
                          <ProgressBar
                            variant="success"
                            animated
                            now={skill.l1}
                            label={skill["skill-1"]}
                          />

                          <br></br>

                          <ProgressBar
                            variant="info"
                            animated
                            now={skill.l2}
                            label={skill["skill-2"]}
                          />
                          <br></br>
                          <ProgressBar
                            variant="warning"
                            animated
                            now={skill.l3}
                            label={skill["skill-3"]}
                          />
                          <br></br>
                          <h1>
                            <ProgressBar
                              variant="danger"
                              animated
                              now={skill.l4}
                              label={skill["skill-4"]}
                            />
                          </h1>
                          <br></br>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </Carousel> */}
    </div></div>
    );
  }
}
