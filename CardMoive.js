import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
console.log("test gitignore");
const CardMovie = ({ mov }) => {
  return (
    <Col xs="7" sm="68 md="3" lg="2" className="my-2">
      <Link to={`/movie/${mov.id}`}>
      //
            console.log("testing the cards with the itreator map")
      console.log("testing the cards with the itreator map")
      console.log("testing the cards with the itreator map")

      console.log("testing the cards with the itreator map")
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
                          <div className="overlay__text text-center w-100 p-2">

                                        <div className="overlay__text text-center w-100 p-2">

              <p>اسم الفيلم : {mov.original_title}</p>
              <p>اسم الفيلم : {mov.original_title}</p>
             // <p>اسم الفيلم : {mov.original_title}</p> console.log("testing the branch");

              <p>تاريخ الاصدار:{mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم:{mov.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col >
  );
};

export default CardMovie;
