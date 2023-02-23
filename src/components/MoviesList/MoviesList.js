import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'

const MoviesList = () => {
    const {movies, thisPage, moviesByGenre, total_pages} = useSelector(state => state.movieReducer)

    const [query, setQuery] = useSearchParams({page: '1'});

    const dispatch = useDispatch()

    const {genreId} = useParams()


    useEffect(() => {
        if(genreId !== undefined) {
            dispatch(movieActions.getMoviesByGenre({genreId, page: query.get('page')}))
        } else {
            dispatch(movieActions.getAllMovies({page: query.get('page')}))
        }
    }, [dispatch, query, genreId])


    return (
        <div className={css.mainPageForMovies}>
            <div className={css.movies}>
                {genreId ? moviesByGenre.map(movie => <Movie key={movie.id} movie={movie}/>) : movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button disabled={thisPage === 1}
                        onClick={() => setQuery(query => ({page: query.get('page') - 1}))}>prev page
                </button>
                <button disabled={thisPage === total_pages}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next page
                </button>
            </div>

        </div>
    )
}

export {
    MoviesList
}
