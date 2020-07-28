import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Interests.css";

export default class Names extends Component {
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
          name: "Programming languages",
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
      ],
    };
  }
  render() {
    const { skills } = this.state;
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
