import React from "react";
import { useGlobalContext } from "./context";
import {Link} from "react-router-dom"

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

function Movies() {
  const {movies,loading} = useGlobalContext()
  if(loading){
    return (
      <>
        <div className="p-3 bg-white shadow rounded-lg flex justify-center ">
          <progress className="progress w-56 h-5 bg-primary flex  items-center text-white">
            <h1>Loading...</h1>
          </progress>
        </div>
      </>
    );
  }
  return <section className="xl:grid gap-5 grid-cols-3
   md:grid-cols-4 sm:grid-cols-2 sm:gap-2 mb-5">
    {movies.map((movie)=>{
      const {Title:title,imdbID:id,Year:year,Poster:poster,Type:type} = movie
      return (
        <Link to={`/movies/${id}`} key={id}>
          <div className="card w-46 glass sm:mx-auto sm:mb-5  text-center sm:text-left">
            <figure>
              <img src={poster==='N/A' ? url : poster} alt={title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p> {year}</p>
              <h3 className="text-xl font-bold overline">{type}</h3>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">More Info!</button>
              </div>
            </div>
          </div>
        </Link>
      );
    })}

  </section> ;
}

export default Movies;
