import React, { Component } from "react";
import "./Jumbotron.css";

export default class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron container">
        <h2 class="display-4 container text-center">Education</h2>

        <ul class="timeline">
         
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">National College of Ireland</span>
                <span class="time-wrapper">
                  <span class="time">2019 - 2020</span>
                </span>
              </div>
              <div class="desc">
                <b>Master of Science in Cloud Computing</b>
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
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">Anna University</span>
                <span class="time-wrapper">
                  <span class="time">2014 - 2018</span>
                </span>
              </div>
              <div class="desc">
                <b>Bachelor of Engineering in Computer Science</b>
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
        </ul>
      </div>
    );
  }
}
