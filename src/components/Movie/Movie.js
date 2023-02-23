import css from './Movie.module.css'
import {Link} from "react-router-dom";


const Movie = ({movie}) => {
    const {id, title, poster_path} = movie
    const image = `https://image.tmdb.org/t/p/w300${poster_path}`

    return (
        <Link to={`/movieInfo/${id}`} state={{...movie}} className={css.link}>
            <div className={css.movie}>
                <div>
                    <img className={css.images} src={image} alt={title}/>
                </div>
                <h4>{title}</h4>
            </div>
        </Link>
    )
}

export {
    Movie
}
