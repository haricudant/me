import React, { Component } from "react";
import "./Work.css";
import ImageContentHover from "react-image-hover";

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [
        {
          image:
            "https://images.pexels.com/photos/159935/pexels-photo-159935.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Residental community connect",
          test: "Connects a residential community with various aspects",
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
        },
        {
          image:
            "https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Contact Manager",
          test: "A website that displays the contact details",
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
                            <div
                              class="btn btn-light light"
                              href="https://www.linkedin.com/jobs/view/1921414792/"
                            >
                              <i class="x fa fa-eye" aria-hidden="true"></i>
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
