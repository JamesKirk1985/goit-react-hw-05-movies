import { useEffect, useState } from "react"
import { getSearchMovieFunction } from "Api/Api"
import { MoviesList } from "components/MoviesList/MoviesList" 
import { useSearchParams } from "react-router-dom"

const SearchMovie = ({  goToMovieDetails }) => {
   
    const [moviesList, setMoviesList] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
   
    function handleSubmit(event) {
        event.preventDefault()        
        setSearchParams({ query: event.target.input.value })
    }

    useEffect(() => {
        if (searchParams.get('query')) {
            getMoviesDetails(searchParams.get('query'))}},
    [searchParams])

     async function getMoviesDetails(searchKey) { 
    try {
        const data = await getSearchMovieFunction(`search/movie`, searchKey)        
        setMoviesList(data)         
        return data.results
        
    } catch (error) {
        console.log(error.message)}
    }       

    return <>        
        <form onSubmit={handleSubmit}>
            <input type="text" name="input"/>
            <button type="submit">search</button>
        </form>
        {moviesList&&<MoviesList list={moviesList.results} goToMovieDetails={ goToMovieDetails} />}
    </>
}
export default SearchMovie