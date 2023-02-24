import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './Movie.module.css'


const Movie = ({movie}) => {
    const {id, title, poster_path, genre_ids} = movie
    const image = `https://image.tmdb.org/t/p/w300${poster_path}`

    const {genres} = useSelector(state => state.movieReducer)


    const findGenre = (id) => {
        const genre = genres.find(item => item.id === id)
        return genre?.name
    }


    return (
        <Link to={`/movieInfo/${id}`} state={{...movie}} className={css.link}>
            <div className={css.movie}>

                <div>
                    <img className={css.images} src={image} alt={title}/>

                    <div className={css.divForBadge}>
                        {genre_ids?.map(item => <Link to={`/movies/${item}`}><div key={item} className={css.badges}>{findGenre(item) + ' '}</div></Link>)}
                    </div>
                </div>

                <h4>{title}</h4>
            </div>
        </Link>
    )
}

export {
    Movie
}
