import { NavLink } from "react-router-dom"
import css from './Header.module.css'

export const Header = () => {
    

    return (
        <>
            <nav className={css.header}>
                <li><NavLink className={css.page} to="/">Home</NavLink></li>
                <li><NavLink className={css.page} to="/movies">Movies</NavLink></li>  
            </nav>    
        </>
    )
}