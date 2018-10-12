import React from "react";

const Card = props => {
  return props.films.map(film => {
    return (
      <div key={film.id} className="card col-lg-6">
        <div className="card-body"/>
        <h4 className="card-title">{film.title}</h4>
        <p className="card-text">{film.description}</p>
      </div>
    );
  });
};

export default Card;
