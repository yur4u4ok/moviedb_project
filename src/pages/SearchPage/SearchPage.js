import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Movie} from "../../components";
import css from './SearchPage.module.css'

const SearchPage = () => {

    const {value} = useParams()

    const dispatch = useDispatch()

    const {searchMovies, thisPage, total_pages} = useSelector(state => state.movieReducer)


    useEffect(() => {
        if (value) {
            dispatch(movieActions.getMoviesBySearch({value}))
        }
    }, [dispatch, value])


    return (
        <div className={css.mainSearchDiv}>
            <div className={css.Search}>
                {searchMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

export {
    SearchPage
}
