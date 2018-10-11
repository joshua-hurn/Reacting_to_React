import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("http://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then((films) => {
        this.setState({
            films,
         });
        });
    }
      

  render() {
    return (
        <div>
            {this.state.films.map((film) => {
                return <p key={film.id}>{film.title}</p>
            })}
            <h1>hello world</h1>
        </div>
    );
  }
}

export default App;
