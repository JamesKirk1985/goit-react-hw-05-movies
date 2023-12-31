import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom" 

export const TrendList = ({ list }) => {

    const [moviesList, setMoviesList] = useState([])
    const location = useLocation()

    useEffect(() => (setMoviesList(list)), [list])
    
    return (
        <>            
            <ul >
                {moviesList.length>0 && moviesList.map(({ title, id }) => {                    
                    return <li key={id}><Link to={'movies/'+id.toString()} state={{from: location}}>{title}</Link></li>
                })}
            </ul>
        </>)
}