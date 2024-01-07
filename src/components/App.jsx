import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";

const HomePage =lazy(()=>import('../Pages/Home/HomePage'))
const MoviesDetails = lazy(() => import('../Pages/MovieDetails/MoviesDetails'))
const SearchMovie = lazy(() => import("../Pages/SearchMovie/SearchMovie"))
const Cast = lazy(() => import("components/Cast/Cast"))
const Reviews = lazy(()=>import("components/Reviews/Reviews"))

export const App = () => {  

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path='movies' element={<SearchMovie />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
         <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>     
  );
};
