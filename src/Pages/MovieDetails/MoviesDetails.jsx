import { getSearchMovieFunction } from "Api/Api"
import { useEffect, useState } from "react"
import { Link, Outlet, useParams, useLocation } from 'react-router-dom'
import { GoBackButton } from "components/GoBackButton/GoBackButton"


const MoviesDetails = ({children}) => {
    const location = useLocation()
    const { movieId } = useParams('')
    const [movieDetails, setMovieDetails] = useState(null)
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    async function getMoviesDetails() { 
    try {
        const data = await getSearchMovieFunction(`movie/${movieId}`)        
        setMovieDetails(data)        
        return data.results
        
    } catch (error) {
        console.log(error.message)
    }
    }   
    
    useEffect(() => {
        if (movieId) { getMoviesDetails() }
    }, [movieId])
    


    return (
        <>
            <GoBackButton path={ `${location?.state?.from?.pathname}${location?.state?.from?.search}`??'/'} />
            {movieDetails && <div>                
                <img src={movieDetails.poster_path ?
                    `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`                   
                    : defaultImg}
                    width={250}
                    alt={`poster${movieDetails.title}`}/>                
                <h2>{movieDetails.title}</h2>
                <p>user score: {(movieDetails.vote_average * 10).toFixed()}%</p>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
                <h3>Genres</h3>
                <ul>{movieDetails.genres.map(({ id, name }) => (<li key={id}>{name}</li>))}</ul>
                <p>Additional information</p>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>               
                <Outlet/>
            </div>}
            
        </>
    )
}
export default MoviesDetails