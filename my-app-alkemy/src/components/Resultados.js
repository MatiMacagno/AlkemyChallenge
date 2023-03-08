import axios from "axios";
import { useState, useEffect } from 'react'
import swAlert from "@sweetalert/with-react";
import { Link } from "react-router-dom";

function Resultados () {

    let query = new URLSearchParams(window.location.search)
    let keyword = query.get( 'keyword' )

    const [moviesResults, setMoviesResults] = useState([])

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=a61c410b2c2bc25f25a29671dceae58c&language=en-US&page=1&query=${keyword}`
        
        axios.get(endPoint)
        .then(response => {
          const moviesArray = response.data.results;
          
          if(moviesArray.length  === 0){
            swAlert(<h4>Su busqueda no tuvo resultados.</h4>)
          }

          setMoviesResults(moviesArray)
        })
        .catch(error => {
          console.log(error)
        })
    }, [keyword])

    return (
        <>
            <h1>Buscaste: {keyword}</h1>
            {moviesResults.length === 0 && <h2>No hay resultados</h2>}
            <div className="row">
                {
                    moviesResults.map((movie, index) => {
                    return (
                            <div className="col-4 my-4" key={index}>
                                <div className="card">
                                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="peli"/>
                                    <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <Link to={`/Detalle?movieID=${movie.id}`} className="btn btn-primary">View detail</Link>
                                </div>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </>
    )
}

export default Resultados;