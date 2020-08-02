import React, { Component } from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div class="container-fluid jumbotron text-center ct-form">
          <div class="row">
            <div class="col">
              <h2 class="display-4">
                <h1 class=" display-2 ">Lets get in touch?..! </h1>
                <strong>Address:</strong>
                <br></br> Dublin, D05 X0X4.
                <div class="social-buttons text-center" style={{}}>
                  <div class="">
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

            <div class="col">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      class="form-control"
                      placeholder="Message "
                      rows="8"
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
              <div className=" col md-12 btn btn-outline-dark text-center lead">
                Submit
              </div>
            </div>
          </div>
        </div>
        <footer
          class="lead card"
          style={{
            position: "left",
            textAlign: "center",
            color: "white",
            backgroundColor: "purple",
          }}
        >
          &copy; Hari Narayanan Suresh Kumar
        </footer>
      </>
    );
  }
}
