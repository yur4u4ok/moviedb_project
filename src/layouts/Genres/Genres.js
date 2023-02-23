import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";

import css from './Genres.module.css'
import {movieActions} from "../../redux";

const Genres = () => {
    const {genres} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    return (
        <div className={css.Genres}>
            {genres.map(genre => <NavLink to={`/movies/${genre?.id}`} key={genre?.id}><p>{genre?.name}</p></NavLink>)}
        </div>
    )
}

export {
    Genres
}
