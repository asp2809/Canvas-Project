import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="heading">Canvas Operator</div>
        <div className="links">
          <Link class="link" to="/task1">
            <button className="button is-primary is-rounded is-large">
              Task 1
            </button>
          </Link>
          <Link class="link" to="/task2">
            <button className="button is-primary is-rounded is-large">
              Task 2
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
