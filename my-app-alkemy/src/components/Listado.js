import { Navigate, Link } from "react-router-dom";
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import swAlert from "@sweetalert/with-react";

function Listado(props) {

  let token = sessionStorage.getItem('token')

  console.log(props)

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=a61c410b2c2bc25f25a29671dceae58c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    axios.get(endPoint)
      .then(response => {
        const apiData = response.data;
        setMoviesList(apiData.results)
      })
      .catch(error => {
        swAlert(<h2>El llamado a la API no se pudo realizar.</h2>)
      })
  }, [setMoviesList])

  

  return (
    <>
      { !token && <Navigate to='/' /> }
      <div className="row">
      {
        moviesList.map((movie, index) => {
          return (
            <div className="col-3 " key={index}>
              <div className="card my-4 card-personalizada">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="peli"/>
                <button onClick={props.addOrRemoveFromFavs} className="favourite-btn" data-movie-id={movie.id}>❤️</button>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview}</p>
                  <Link to={`/Detalle?movieID=${movie.id}`} className="btn btn-primary">View detail</Link>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </>
  );
}

export default Listado;
