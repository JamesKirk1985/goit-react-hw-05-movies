import { useState, useEffect } from "react"
import { getMovieFunction } from "Api/Api"
import { useParams } from "react-router-dom"


const Cast = () => {
    
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
    
    const film = useParams()
    
    const [cast, setCast] = useState([])
    const [id, setId] = useState('')

    useEffect(() => {
        setId(film.movieId);
        if(id){getMoviesCast()};        
    }, [film, id])

    async function getMoviesCast() { 
    try {
        const data = await getMovieFunction(`movie/${film.movieId}/credits`)        
        setCast(data.cast)        
        return data.results
        
    } catch (error) {
        console.log(error.message)
    }
    }   
    
    return <>
           <ul>
            {cast.length > 0 && cast.map(({ name, profile_path, character, id }) => (<li key={id}>
                <img src={profile_path ?`https://image.tmdb.org/t/p/w500/${profile_path}`: defaultImg}
                    width={100}
                    alt="actor img"/>                
                <p>{name}</p>
                <p>character: { character}</p>
            </li>))}
        </ul>
    </>
}
export default Cast