import { getSearchMovieFunction } from "Api/Api"
import { useEffect, useState, useRef } from "react"
import { Link, Outlet, useParams, useLocation,} from 'react-router-dom'
import { GoBackButton } from "components/GoBackButton/GoBackButton"
import { Header } from "components/Header/Header"
import Loader from "components/Loader/Loader"


const MoviesDetails = ({children}) => {
    const location = useLocation()
    const { movieId } = useParams('')    
    const [movieDetails, setMovieDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'     
    const path = useRef(location?.state?.from) 
    
    useEffect(() => {
        if (movieId) {
            getMoviesDetails()
            async function getMoviesDetails() { 
    try {
        setIsLoading(true)
        const data = await getSearchMovieFunction(`movie/${movieId}`)        
        setMovieDetails(data)        
        return data.results
        
    } catch (error) {
        console.log(error.message)
    } finally {setIsLoading(false)}
    }  
        }
    }, [movieId])   
   
    return (
        <>
            {isLoading&&<Loader/> }
            <Header/>
            <GoBackButton path={ `${path.current?.pathname}${path.current?.search}`} />
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
                    <li><Link to="cast" >Cast</Link></li>
                    <li><Link to="reviews" >Reviews</Link></li>
                </ul>               
                <Outlet/>
            </div>}
            
        </>
    )
}
export default MoviesDetails