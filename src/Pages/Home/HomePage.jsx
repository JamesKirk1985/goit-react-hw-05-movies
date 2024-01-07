import { getMovieFunction } from "Api/Api"
import { useEffect, useState } from "react"
import { TrendList } from "components/TrendList/TrendList" 
import { Header } from "components/Header/Header"
import Loader from "components/Loader/Loader"

const HomePage = ({goToMovieDetails}) => {
    const [trend, setTrend] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function trendingMovies() { 
    try {
        setIsLoading(true)
        const data = await getMovieFunction('trending/movie/day')        
        setTrend(data.results)
        return data.results
        
    } catch (error) {
        console.log(error.message)
    } finally {setIsLoading(false)}
    }  
    
    useEffect(() => {
        trendingMovies()        
    }, [])   

    return (
        <>
            <Header/>
            {trend.length > 0 && <TrendList list={trend} />} 
            {isLoading&&<Loader/> }
        </>)
}
export default HomePage