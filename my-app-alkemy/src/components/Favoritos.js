import {React} from 'react'
import {Link, Navigate} from 'react-router-dom'


function Favoritos(props) {

  let token = sessionStorage.getItem('token')

  return (
    <>
        <h2>Seccion Favoritos</h2>
        { !token && <Navigate to='/' /> }
        <div className="row">
        {!props.favoritos.length && <div><h2>No tienes favoritos.</h2></div>}
        {
        props.favoritos.map((movie, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card my-4">
                <img className="card-img-top" src={movie.imageURL} alt="peli"/>
                <button onClick={props.addOrRemoveFromFavs} className="favourite-btn" data-movie-id={movie.id}>💔</button>
                <div className="card-body">
                  <h5 className="card-title">{movie.titleMovie}</h5>
                  <p className="card-text">{movie.overviewMovie}</p>
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

export default Favoritos;