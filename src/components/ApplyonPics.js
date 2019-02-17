import React, { Component } from "react";
import application from "../application.json";

class ApplyonPics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false,
      mouseDownCoord: [],
      mouseUpCoord: []
    };
    this.canvas = null;
  }
  componentDidMount = () => {
    let x = document.getElementById("mainCanvas");
    this.canvas = x.getContext("2d");
  };

  mouseDownEvent = event => {
    this.canvas.clearRect(0, 0, 1500, 1000);
    let canvas = document.getElementById("mainCanvas");
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    this.setState({ mouseDown: true, mouseDownCoord: [x, y] });
  };

  mouseUpEvent = event => {
    let canvas = document.getElementById("mainCanvas");
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    this.setState({ mouseUpCoord: [x, y] }, this.makeRectangle);
  };

  makeRectangle = () => {
    this.canvas.strokeStyle = "#FF0000";
    this.canvas.strokeRect(
      this.state.mouseDownCoord[0],
      this.state.mouseDownCoord[1],
      this.state.mouseUpCoord[0] - this.state.mouseDownCoord[0],
      this.state.mouseUpCoord[1] - this.state.mouseDownCoord[1]
    );
  };

  render() {
    return (
      <div className="ApplyonPics">
        <div className="heading animated fadeInDown">
          Draw Rectangles on Photos
        </div>
        <div className="images">
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic1.jpeg"} alt="second" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic2.jpeg"} alt="third" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic3.jpeg"} alt="fourth" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic4.jpeg"} alt="fifth" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic5.jpg"} alt="sixth" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic6.jpeg"} alt="sixth" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic7.jpeg"} alt="sixth" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic8.jpeg"} alt="sixth" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic9.jpeg"} alt="sixth" />
          </div>
          <div className="img1 animated zoomIn">
            <img src={application.apiUrl + "pic10.jpeg"} alt="sixth" />
          </div>
        </div>
        <div className="canvas">
          <canvas
            id="mainCanvas"
            onMouseDown={e => this.mouseDownEvent(e)}
            onMouseUp={e => this.mouseUpEvent(e)}
            height="1100"
            width="1500"
          >
            Your Browser doesn't support Canvas.
          </canvas>
        </div>
      </div>
    );
  }
}

export default ApplyonPics;
