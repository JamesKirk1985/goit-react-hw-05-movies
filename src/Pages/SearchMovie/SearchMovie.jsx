import { useEffect, useState } from "react"
import { getSearchMovieFunction } from "Api/Api"
import { MoviesList } from "components/MoviesList/MoviesList" 
import { useSearchParams } from "react-router-dom"
import { Header } from "components/Header/Header"
import { SearchForm } from "components/SearchForm/SearchForm"
import Loader from "components/Loader/Loader"

const SearchMovie = () => {
   
    const [moviesList, setMoviesList] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()   

    useEffect(() => {
        if (searchParams.get('query')) {
            getMoviesDetails(searchParams.get('query'))}},
    [searchParams])

    async function getMoviesDetails(searchKey) { 
    try {
        setIsLoading(true)
        const data = await getSearchMovieFunction(`search/movie`, searchKey)        
        setMoviesList(data)         
        return data.results
        
    } catch (error) {
        console.log(error.message)
    } finally {setIsLoading(false)}
    }       

    return <>
        <Header /> 
        <SearchForm setSearchParams={ setSearchParams } />        
        {moviesList && <MoviesList list={moviesList.results} />}
        {isLoading&&<Loader/> }
        </>
}
export default SearchMovie