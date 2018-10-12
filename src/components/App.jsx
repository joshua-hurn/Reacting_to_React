import React, { Component } from "react";
import Card from "./Card";
import GhibliLogo from "../assets/logo.png";
import "isomorphic-fetch";
import "es6-promise";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      areFilmsDisplayed: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => {
        this.setState({
          films
        });
      });
  }

  handleClick(e) {
    this.setState({
      areFilmsDisplayed: true
    });
  }

  render() {
    if (this.state.areFilmsDisplayed) {
      return (
        <div>
          <img className="img-responsive center-block" src={GhibliLogo} />
          <h1 className="font-weight-bold">Movies</h1>
          <div className="container-fluid">
            <div className="row">
              <Card films={this.state.films} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <img className="img-responsive center-block" src={GhibliLogo} />
          <button onClick={e => this.handleClick(e)}>Load Films</button>
        </>
      );
    }
  }
}

export default App;
