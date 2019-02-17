import React, { Component } from "react";

class CanvasOperations extends Component {
  constructor(props) {
    super(props);
    this.canvas = null;
    this.state = {
      addRect: false,
      resizeRect: false,
      height: 0,
      width: 0,
      color: "",
      rectCoordinates: [],
      selected: false,
      selectedCoord: []
    };
  }

  componentDidMount() {
    let x = document.getElementById("mainCanvas");
    this.canvas = x.getContext("2d");
  }

  clearCanvas = () => {
    this.canvas.clearRect(0, 0, 1500, 600);
    this.state.rectCoordinates.forEach(e => {
      this.makeRect(e[0], e[1], e[2], e[3], e[4]);
    });
  };

  addRectangle = () => {
    let x = this.getRandomInt(1500 - this.state.width);
    let y = this.getRandomInt(600 - this.state.height);
    this.makeRect(x, y, this.state.height, this.state.width, this.state.color);
  };

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  getCursorPosition = event => {
    this.setState({ selected: false, selectedCoord: [] });
    let canvas = document.getElementById("mainCanvas");
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    this.state.rectCoordinates.forEach(e => {
      if (x > e[0] && y > e[1] && x < e[0] + e[3] && y < e[1] + e[2]) {
        //Select the particular rectangle
        this.setState({ selected: true, selectedCoord: e });
        this.canvas.fillStyle = "#000";
        this.canvas.fillRect(e[0], e[1], e[2], e[3]);
      } else {
        this.canvas.fillStyle = e[4];
        this.canvas.fillRect(e[0], e[1], e[2], e[3]);
      }
    });
  };

  resizeRectangle = () => {
    let newCoordinates = this.state.rectCoordinates.filter(rect => {
      if (
        rect[0] === this.state.selectedCoord[0] &&
        rect[1] === this.state.selectedCoord[1] &&
        rect[2] === this.state.selectedCoord[2] &&
        rect[3] === this.state.selectedCoord[3]
      )
        return false;
      else {
        console.log(rect);
        return true;
      }
    });
    this.setState({ rectCoordinates: newCoordinates }, () => {
      this.makeRect(
        this.state.selectedCoord[0],
        this.state.selectedCoord[1],
        this.state.height,
        this.state.width,
        this.state.color
      );
      this.setState(
        { selected: false, selectedCoord: [], resizeRect: false },
        this.clearCanvas
      );
    });
  };
  deleteRect = () => {
    let newCoordinates = this.state.rectCoordinates.filter(rect => {
      if (
        rect[0] === this.state.selectedCoord[0] &&
        rect[1] === this.state.selectedCoord[1] &&
        rect[2] === this.state.selectedCoord[2] &&
        rect[3] === this.state.selectedCoord[3]
      )
        return false;
      else {
        console.log(rect);
        return true;
      }
    });
    this.setState({ rectCoordinates: newCoordinates }, this.clearCanvas);
  };

  makeRect = (x, y, h, w, color) => {
    this.canvas.fillStyle = color;
    this.setState({
      rectCoordinates: [...this.state.rectCoordinates, [x, y, h, w, color]]
    });
    this.canvas.fillRect(x, y, h, w);
  };

  render() {
    return (
      <div className="CanvasOperations">
        <div className="heading">Canvas Operator</div>
        <canvas
          onMouseDown={e => this.getCursorPosition(e)}
          id="mainCanvas"
          height="600"
          width="1500"
          style={{ border: "2px solid black" }}
        >
          Your Browser doesn't support Canvas.
        </canvas>
        <div className="operations">
          <div className="addRectSection">
            <button
              class="addRect button is-primary is-medium is-rounded"
              onClick={() => this.setState({ addRect: true })}
            >
              Add Rectangle
            </button>
            {this.state.addRect ? (
              <div className="form animated fadeInDown">
                <div class="field">
                  <label class="label">Height</label>
                  <div class="control">
                    <input
                      class="input"
                      type="number"
                      placeholder="Height"
                      onChange={e =>
                        this.setState({ height: Number(e.target.value) })
                      }
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Width</label>
                  <div class="control">
                    <input
                      class="input"
                      type="number"
                      placeholder="Width"
                      onChange={e =>
                        this.setState({ width: Number(e.target.value) })
                      }
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Color</label>
                  <div class="control">
                    <input
                      class="input"
                      type="color"
                      placeholder="Color"
                      onChange={e => this.setState({ color: e.target.value })}
                    />
                  </div>
                </div>
                <div class="control" style={{ textAlign: "center" }}>
                  <button
                    class="button is-primary is-rounded"
                    onClick={this.addRectangle}
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <div className="resizeRect">
            {this.state.selected ? (
              <button
                class="button is-primary is-medium is-rounded"
                onClick={() => this.setState({ resizeRect: true })}
              >
                Resize Rectangle
              </button>
            ) : (
              <button class="button is-primary is-medium is-rounded" disabled>
                Resize Rectangle
              </button>
            )}
            {this.state.resizeRect ? (
              <div
                className="form animated fadeInDown"
                style={{ border: "1px solid black" }}
              >
                <div class="field">
                  <label class="label">Height</label>
                  <div class="control">
                    <input
                      class="input"
                      type="number"
                      placeholder="Height"
                      onChange={e =>
                        this.setState({ height: Number(e.target.value) })
                      }
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Width</label>
                  <div class="control">
                    <input
                      class="input"
                      type="number"
                      placeholder="Width"
                      onChange={e =>
                        this.setState({ width: Number(e.target.value) })
                      }
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Color</label>
                  <div class="control">
                    <input
                      class="input"
                      type="color"
                      placeholder="Color"
                      onChange={e => this.setState({ color: e.target.value })}
                    />
                  </div>
                </div>
                <div class="control" style={{ textAlign: "center" }}>
                  <button
                    class="button is-primary is-rounded"
                    onClick={this.resizeRectangle}
                  >
                    Update
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <div className="deleteRect">
            {this.state.selected ? (
              <button
                class="button is-primary is-medium is-rounded"
                onClick={this.deleteRect}
              >
                Delete Rectangle
              </button>
            ) : (
              <button class="button is-primary is-medium is-rounded" disabled>
                Delete Rectangle
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CanvasOperations;
