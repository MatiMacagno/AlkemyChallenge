import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from "axios";

function Detalle () {

    let token = sessionStorage.getItem( 'token' )

    let query = new URLSearchParams(window.location.search)
    let movieID = query.get( 'movieID' )

    const [ movie, setMovie ] = useState( null )

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=a61c410b2c2bc25f25a29671dceae58c&language=en-US`
        console.log( endPoint)
        axios.get( endPoint )
        .then(response => {
            const movieData = response.data;
            setMovie( movieData )
        })
        .catch(error => {
            console.log(error)
        })

    }, [movieID]);

    return (
        <>
        { !token && <Navigate to='/' /> }
        <h2>Detalle de la pelicula</h2>
        { !movie && <h3>Cargando...</h3> }
        { movie &&  
        <div className="row">
            <div className="col-4"><img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="peli"/></div>
            <div className="col-8">
                <h5>{ movie.title }</h5>
                <h5>{ movie.release_Date }</h5>
                <ul>{ movie.genres.map ( oneGenre => <li key={ oneGenre.id }>{ oneGenre.name }</li>)}</ul>
                <p>{ movie.overview }</p>
            </div>
        </div>}
        </>
    )
}

export default Detalle;