import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

function SingleMovie() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg:"" });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.Response === "False") {
      setError({ show: true, msg: data.Error });
      setLoading(false);
    } else {
      setMovie(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id])

  if (loading) {
    return (
      <>
        <div className="p-3 bg-white shadow rounded-lg flex justify-center ">
          <progress className="progress w-56 h-5 bg-primary flex  items-center text-white"></progress>
        </div>
      </>
    );
  }
  if (error.show) {
    return (
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{error.msg}</h2>

          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn">Back-to-Movies</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  const {Poster: poster,Title: title,Plot: plot,Genre: genre ,Released:released,Award: award ,Rated:rated,} = movie

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-auto">
      <figure>
        <img src={poster} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{genre}</p>
        <p>{released}</p>
        <p>{plot}</p>
        <p>{award}</p>
        <Link to="/">
          <button className="btn btn-primary">Back to Movies</button>
        </Link>
        <p>{rated}</p>
      </div>
    </div>
  );
}

export default SingleMovie;
