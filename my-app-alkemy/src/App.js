//libraries
import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';

//Components
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header'
import Footer from './components/Footer'
import Detalle from './components/Detalle'
import Resultados from './components/Resultados'
import Favoritos from './components/Favoritos';

//Styles
import './css/app.css'
import './css/bootstrap.min.css'  


function App() {

  const [favourites, setFavourites] = useState([])

  useEffect(() => {
   
    const favsInLocal = localStorage.getItem('favs')
    if(favsInLocal !== null){
      const favsArray = JSON.parse(favsInLocal)
      setFavourites(favsArray)
    }
   
   }, [])

  const addOrRemoveFromFavs = (e) => {

  const favMovies = localStorage.getItem('favs');

  let tempMoviesInFavs;

  if(favMovies === null) {
    tempMoviesInFavs = [];
  } else{
    tempMoviesInFavs = JSON.parse(favMovies)
  }

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imageURL = parent.querySelector('img').getAttribute('src')
    const titleMovie = parent.querySelector('h5').innerText
    const overviewMovie = parent.querySelector('p').innerText
    const movieData = {
      imageURL, titleMovie, overviewMovie, id: btn.dataset.movieId
    }

    let movieIsInArray = tempMoviesInFavs.find( movie => {
      return movie.id === movieData.id
    });

    if(!movieIsInArray){
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
      setFavourites(tempMoviesInFavs)
    } else {
      let moviesLeft = tempMoviesInFavs.filter( movie => {
        return movie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavourites(moviesLeft)
    }
    
  }

  return (
  <>
    <Header favoritos={favourites}/>
    <div className='container mt-3'>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/listado" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
        <Route path="/detalle" element={<Detalle/>}/>
        <Route path="/resultados" element={<Resultados/>}/>
        <Route path="/favoritos" element={<Favoritos favoritos={favourites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
  );
}

export default App;
