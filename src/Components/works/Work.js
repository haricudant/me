import React, { Component } from "react";
import "./Work.css";
import ImageContentHover from "react-image-hover";
import SweetAlert from "react-bootstrap-sweetalert";
import Names from "../Interests/Names.js";

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [
        {
          image:
            "https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Residental community connect",
          text: "Connects a residential community with various aspects",
        },
        {
          image:
            "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "The Home Chef",
          text: "An app for culinary enthusiasts",
        },
        {
          image:
            "https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Charitable trust",
          text: "A website for charitable trust",
        },
        {
          image:
            "https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Contact Manager",
          text: "A website that displays the contact details",
        },
      ],
    };
  }
  state = {
    show: false,
  };
  showModal = (e) => {
    this.setState({
      show: true,
    });
  };

  render() {
    const { contents } = this.state;
    return (
      <div className="cc container">
        <div class="">
          <h3 class="display-4 text-center">Projects</h3>
          <div class="row">
            {contents.length
              ? contents.map((content) => (
                  <div class="column">
                    <div class="item">
                      <ImageContentHover
                        className="image-cover text-center"
                        tileWidth="285px"
                        tileHeight="290px"
                        image={content.image}
                        style={{ width: "100%", height: "100%" }}
                        content={{
                          title: (
                            <h4>
                              <b class>{content.title}</b>
                            </h4>
                          ),
                          body: (
                            <a href="https://www.linkedin.com/jobs/view/1921414792/">
                              Click
                            </a>
                          ),
                          text:( <p>{content.text}</p>),
                        }}
                        effect="slideHorizontal"
                        a
                      />
                      <div></div>
                      <div class="modal" id="myModal">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">Modal Title</h5>
                              <button class="close" data-dismiss="modal">
                                &times;
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}
