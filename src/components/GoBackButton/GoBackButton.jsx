import { Link } from "react-router-dom";
import css from './GoBackButton.module.css'

export const GoBackButton = ({path, children}) => {

    return (<button className={css.button } type="button"><Link to={ path ??'/'}>Go Back</Link></button>)
}