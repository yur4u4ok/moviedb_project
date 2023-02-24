import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Pagination} from "@mui/material";

import {movieActions} from "../../redux";
import {Movie} from "../../components";
import css from './SearchPage.module.css'

const SearchPage = () => {

    const {value} = useParams()

    const dispatch = useDispatch()

    const {searchMovies, currentSearchPage, total_pages} = useSelector(state => state.movieReducer)


    useEffect(() => {
        if (value) {
            dispatch(movieActions.getMoviesBySearch({value, currentSearchPage}))
        }
    }, [dispatch, value, currentSearchPage])


    const changePage = (page) => {
        dispatch(movieActions.setSearchPage(page))
    }

    return (
        <div className={css.mainSearchDiv}>
            <div>

                <div className={css.pagination}>
                    <Pagination
                        page={currentSearchPage}
                        count={total_pages}
                        onChange={(_, page) => changePage(page)}
                        shape={'rounded'}
                        color={'primary'}
                    />
                </div>

                <div className={css.Search}>
                    {searchMovies.length < 1 ?
                        <img src="https://media.tenor.com/KOZLvzU0o4kAAAAC/no-results.gif"
                             alt="No Results Found" className={css.NoResults}/>
                        :
                        searchMovies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>

                <div className={css.pagination}>
                    <Pagination
                        page={currentSearchPage}
                        count={total_pages}
                        onChange={(_, page) => changePage(page)}
                        shape={'rounded'}
                        color={'primary'}
                    />
                </div>
            </div>
        </div>
    )
}

export {
    SearchPage
}
