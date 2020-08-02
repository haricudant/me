import React, { Component } from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div
          class="container-fluid ct-form"
          style={{
            paddingBottom: "20px",
            paddingTop: "30px",
            backgroundColor: "#17202A ",
          }}
        >
          {" "}
          <div class="text-center">
            <div class="col">
              <h2
                class="display-4"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                <h1
                  style={{
                    fontFamily: "Montserrat",
                    color: "white",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  Get in touch{" "}
                </h1>
                <h2 style={{ fontFamily: "Montserrat", color: "white" }}>
                  {" "}
                  <strong>Address:</strong>
                  <br></br> Dublin, D05 X0X4.
                </h2>
                <div
                  class="social-buttons text-center"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {" "}
                  <div class="" style={{ fontFamily: "Montserrat" }}>
                    <a href="https://www.instagram.com/hari_narayanan5/">
                      <i class="fab fa-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/haricudant/">
                      <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a href="https://github.com/haricudant/">
                      <i class="fab fa-github"></i>
                    </a>

                    <a href="https://wa.me/+353894562027">
                      <i
                        class="fab fa-whatsapp"
                        data-placement="top"
                        data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      ></i>
                    </a>
                  </div>
                </div>
              </h2>
            </div>
          </div>
          {/*****************************  form starts here *************************/}
          <div class="col">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    class="form-control"
                    placeholder="Message "
                    rows="4"
                    required="required"
                    data-error="Please, leave us a message."
                  />
                  <div class="help-block with-errors" />
                </div>
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Email Address"
                    required="required"
                    data-error="Firstname is required."
                  />
                  <div class="help-block with-errors" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <input
                    id="form_lastname"
                    type="text"
                    name="surname"
                    class="form-control"
                    placeholder=" Full Name"
                    required="required"
                    data-error="Lastname is required."
                  />
                  <div class="help-block with-errors" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Phone Number"
                    required="required"
                    data-error="Firstname is required."
                  />
                  <div class="help-block with-errors" />
                </div>
              </div>
            </div>
            <div className=" col md-12 btn btn-dark text-center lead">
              Submit
            </div>
          </div>
          <hr></hr>
        </div>
        <div
          class="fixed-bottom button-1 text-center"
          style={{ paddingBottom: "20px", color: "maroon" }}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-download"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"
            />
            <path
              fill-rule="evenodd"
              d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"
            />
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"
            />
          </svg>
          <br></br>
          <a
            href="https://www.dropbox.com/s/oj5qtk2jvurw87z/Hari%20Narayanan%20Kumar.pdf?dl=0"
            style={{ color: "maroon" }}
          >
            <b> CV</b>
          </a>
        </div>
        <footer
          style={{
            position: "left",
            textAlign: "center",
            color: "white",
            backgroundColor: "#17202A",
            paddingTop: "30px",
            paddingBottom: "10px",
            fontFamily: "Montserrat",
          }}
        >
          &copy; Hari Narayanan Suresh Kumar
        </footer>
      </>
    );
  }
}
