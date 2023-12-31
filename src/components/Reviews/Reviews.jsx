import { useState, useEffect } from "react"
import { getMovieFunction } from "Api/Api"
import { useParams } from "react-router-dom"

const Reviews = () => {

    const film = useParams()
    const [reviews, setReviews] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        setId(film.movieId);
        if (id) {
            getMoviesCast()
            async function getMoviesCast() { 
        try {
            const data = await getMovieFunction(`movie/${film.movieId}/reviews`)        
            setReviews(data.results)          
            return data.results
        
        } catch (error) {
            console.log(error.message)
        }
        }
        };        
    }, [film.movieId, id])

    return (<>        
        <ul>
            {reviews.length > 0 ? reviews.map(({ author, content, id }) => (<li key={id }><p>Author: {author}</p>
            <p>{ content}</p></li>)) : "That Movie Without Reviews" }
        </ul>        
        </>)
}
export default Reviews