import React, { Component } from "react";
import "./Work.css";
import ImageContentHover from "react-image-hover";
import { Link, Route, Router, Redirect } from "react-router-dom";

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [
        {
          image:
            "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "Residental community connect",
          test: "Connects a residential community with various aspects",
          link: "https://cryptic-escarpment-89060.herokuapp.com/",
        },
        {
          image:
            "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "The Home Chef",
          test: "An app for culinary enthusiasts",
        },
        {
          image:
            "https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Charitable trust",
          test: "A website for charitable trust",
          link: "https://haricudant.github.io/React_trustproject-master/#/",
        },
        {
          image:
            "https://images.pexels.com/photos/594452/pexels-photo-594452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "Contact Manager",
          test: "A website that displays the contact details",
          link: "https://haricudant.github.io/ContactDetailsReact/#/",
        },
        {
          image:
            "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          title: "Weather Calculator",
          test: "A website that displays the Weather location of current and other user",
          link: "https://haricudant.github.io/test/#/",
        },
        {
          image:
            "https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Research Thesis",
          test: "My masters thesis",
          link: "http://trap.ncirl.ie/4146/",
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
      <div
        className="cc back  container-fluid"
        style={{ paddingTop: "0px", "font-family": "Montserrat" }}
      >
        <br></br>
        <div class="">
          <h3
            class="display-3 text-center"
            style={{ "font-family": "Montserrat", color: "17202A" }}
          >
            Projects
          </h3>

          <div class="row">
            {contents.length
              ? contents.map((content) => (
                  <div class="col">
                    <div class="">
                      <ImageContentHover
                        className="image-cover  bg-transparent container text-center"
                        tileWidth="200px"
                        tileHeight="200px"
                        image={content.image}
                        style={{ width: "100%", height: "100%" }}
                        content={{
                          title: (
                            <h4>
                              <b class>{content.title}</b>
                            </h4>
                          ),
                          body: (
                            <div class="btn btn-light  ">
                              <a href={content.link}>
                                <i class="x fa fa-eye " aria-hidden="true"></i>
                              </a>
                            </div>
                          ),
                        }}
                        effect="slideHorizontal"
                        a
                      />
                      <div></div>
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
