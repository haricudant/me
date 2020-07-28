import React, { Component } from "react";
import Work from "./Work.js";

import { Card, CardGroup, Button, Container, Row, Col } from "react-bootstrap";

export default class Align extends Component {
  render() {
    return (
      <div>
        <Container>
          <div class="row">
            {this.map((value) => {
              return (
                <div class="col-md-6">
                  <Work />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}
