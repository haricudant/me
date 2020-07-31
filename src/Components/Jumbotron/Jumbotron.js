import React, { Component } from "react";
import "./Jumbotron.css";
import { baby } from './bby.png';

export default class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotronBG container-fluid jumbo-cover">
        <h2 class="display-4 container text-center" style={{ color: "white" }}>
          My Timeline
        </h2>
        <div class="text-center font">
          <img
            src="https://image.flaticon.com/icons/svg/822/822123.svg"
            style={{ height: "80px", width: "80px" }}
            alt="baby"
          ></img>
          <h3>
            {" "}
            <b>July 5 1997</b>
          </h3>
        </div>

        <ul class="timeline">
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag font">Schooling</span>
                <span class="time-wrapper ">
                  <span class="time" font>
                    {" "}
                    <b>2000-2012</b>
                  </span>
                </span>
              </div>
              <div class="desc font">
                <h3>
                  {" "}
                  <b>Sri Shankara Vidhyala</b>, Chennai, India
                </h3>
                <br></br> <b>Avg. Overall grade: 1:1 Honours </b>
                <br></br>
                <b></b>
                <b>Topper of social science in High School Board exams </b>
              </div>
            </div>
          </li>
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag font">High Schooling</span>
                <span class="time-wrapper ">
                  <span class="time" font>
                    {" "}
                    <b>2012-2014</b>
                  </span>
                </span>
              </div>
              <div class="desc font">
                <h3>
                  {" "}
                  <b>Sri Shankara Vidhyala, Chennai, India</b>
                </h3>
                <br></br> <b>Overall grade: 1:1 Honours </b>
                <br></br>
                <b></b>
                <b>Majors in Biology, Physics, Chemistry, French and Maths</b>
              </div>
            </div>
          </li>
          <li>
            {" "}
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag font">Musician</span>
                <span class="time-wrapper ">
                  <span class="time" font>
                    {" "}
                    <b>2003-2018</b>
                  </span>
                </span>
              </div>
              <div class="desc font">
                <h3>
                  {" "}
                  <b>Keyboard player and Independant musician</b>
                </h3>
                <br></br> <b>8th grade in Trinity College of London </b>
                <br></br>
                <b>Skills and musical softwares</b>
                <b>
                  Programming, Mix and mastering, Logix proX and part-time Tamil
                  Lyricist
                </b>
              </div>
            </div>
          </li>
          <li>
            <div class="direction-r font">
              <div class="flag-wrapper font">
                <span class="flag font">Under Graduation</span>
                <span class="time-wrapper">
                  <span class="time">
                    <b>2014 - 2018</b>
                  </span>
                </span>
              </div>
              <div class="desc font">
                <h3>
                  <b>Anna University,</b> Chennai, India.
                  <br></br>
                </h3>
                <h5>
                  <b>Bachelor of Engineering in Computer Science</b>
                </h5>
                <br></br> <b>Overall grade: 1:1 </b>
                <br></br>
                <b>Core Modules:</b> Grid and Cloud Computing, Data structures,
                Algorithms, Java & Internet Programming, Software Engineering,
                Operating Systems, Object-Oriented Analysis, Mobile computing,
                Computer Networks, Artificial Intelligence, Database Management
                Systems.
              </div>
            </div>
          </li>
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag font">Post Graduation</span>,
                <span class="time-wrapper ">
                  <span class="time" font>
                    <b>2019 - 2020</b>
                  </span>
                </span>
              </div>
              <div class="desc font">
                <h3>
                  <b>National College of Ireland,</b> Chennai, India.
                  <br></br>
                </h3>
                <h5>
                  <b>Master of Science in Cloud Computing,</b> Dublin, Ireland
                </h5>
                <br></br> <b>Overall grade: 2:1 </b>
                <br></br>
                <b>Core Modules:</b> Cloud Application Development, Cloud
                Application Services, Programming in Data Analytics, Utility
                Computing, Cloud Architecture, Cloud Security, Research in
                Computing, Research Project and Research Methods, Business
                Strategies for Cloud Computing.
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
