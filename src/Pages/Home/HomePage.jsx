import { getMovieFunction } from "Api/Api"
import { useEffect, useState } from "react"
import { TrendList } from "components/TrendList/TrendList" 

const HomePage = ({goToMovieDetails}) => {
    const [trend, setTrend] = useState([])

    async function trendingMovies() { 
    try {
        const data = await getMovieFunction('trending/movie/day')        
        setTrend(data.results)
        return data.results
        
    } catch (error) {
        console.log(error.message)
    }
    }   
    useEffect(() => {
        trendingMovies()        
    }, [])   

    return (
        <>
            {trend.length>0&&<TrendList list={trend} goToMovieDetails={ goToMovieDetails}/>}           
        </>)
}
export default HomePage