import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import { Suspense, useState, lazy } from "react";


const HomePage = lazy(()=> import('../Pages/Home/HomePage'))
const MoviesDetails = lazy(() => import('../Pages/MovieDetails/MoviesDetails'))
const SearchMovie = lazy(() => import("../Pages/SearchMovie/SearchMovie"))
const Cast = lazy(() => import("components/Cast/Cast"))
const Reviews = lazy(()=>import("components/Reviews/Reviews"))

export const App = () => {

  const [movieId, setMovieId] = useState('')


  function goToMovieDetails(event) {   
    setMovieId(event.target.id)
  }

  return (<>
    <Header/>    
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<>loading...</>}>
        <HomePage goToMovieDetails={goToMovieDetails} />
       </Suspense>
      } /> 
      <Route path='movies' element={<Suspense fallback={<>loading...</>}><SearchMovie goToMovieDetails={ goToMovieDetails } /></Suspense>} />
      <Route path="movies/:movieId" element={<Suspense fallback={<>loading...</>}><MoviesDetails movie_id={movieId} /></Suspense>}>
        <Route path="cast" element={<Suspense fallback={<>loading...</>}><Cast movieId={ movieId } /></Suspense>} />
        <Route path="reviews" element={<Suspense fallback={<>loading...</>}><Reviews movieId={ movieId }/></Suspense>}/>
      </Route>         
    </Routes>
    </> 
      );
};
