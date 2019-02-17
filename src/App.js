import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CanvasOperations from "./components/CanvasOperations";
import ApplyonPics from "./components/ApplyonPics";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/task1" component={CanvasOperations} />
            <Route path="/task2" component={ApplyonPics} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
