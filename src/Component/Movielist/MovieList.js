import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import {Link} from "react-router-dom";
import "./Movielist.css";
const MovieList = ({movielist, search, searchRating}) => {
  // const movielist = props.location.state.movielist;
  // const search = props.location.state.search;
  // const searchRating = props.location.state.searchRating;
  return (
    <div className="list">
      {movielist
        .filter(
          (el) =>
            el.name.toUpperCase().includes(search.toUpperCase()) &&
            el.rating >= searchRating
        )
        .map((el) => (
          <Link
            key={el.id}
            to={{
              pathname: `/Description/${el.id}`,
              state: {
                el,
              },
            }}
          >
            <Card
              image={el.image}
              name={el.name}
              type={el.type}
              description={el.description}
              rating={el.rating}
              trailer={el.trailer}
            />
          </Link>
        ))}
    </div>
  );
};

export default MovieList;
