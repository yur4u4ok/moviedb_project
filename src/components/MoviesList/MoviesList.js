import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Pagination} from "@mui/material";

import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'
import {useParams} from "react-router-dom";

const MoviesList = () => {
    const {movies, moviesByGenre, currentPage, total_pages, loading, selectedGenre, searchMovies} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    const {genreId} = useParams()

    useEffect(() => {
        if(genreId !== undefined){
            dispatch(movieActions.getMoviesByOneGenre({genreId, currentPage}))
        }
        if (selectedGenre.length>0 && (searchMovies.length === 0)) {
            dispatch(movieActions.getMoviesByGenre({selectedGenre, currentPage}))
        }
        else {
            dispatch(movieActions.getAllMovies({currentPage}))
        }
    }, [dispatch, selectedGenre, currentPage, searchMovies, genreId])


    const changePage = (page) => {
        dispatch(movieActions.setCurrentPage(page))
    }


    return (
        <div className={css.mainPageForMovies}>
            {loading ?
                <div className={css.divLoading}><img src="https://media.tenor.com/FawYo00tBekAAAAC/loading-thinking.gif"
                                                     alt="Loading" className={css.loading}/>
                </div>

                :

                <div>
                    <div className={css.pagination}>
                        <Pagination
                            page={currentPage}
                            count={total_pages > 500 ? 500 : total_pages}
                            onChange={(_, page) => changePage(page)}
                            shape={'rounded'}
                            color={'primary'}
                        />
                    </div>

                    <div className={css.movies}>
                        {genreId ? moviesByGenre.map(movie => <Movie key={movie.id}
                                                                     movie={movie}/>)
                        :
                        selectedGenre.length > 0 ? moviesByGenre.map(movie => <Movie key={movie.id}
                                                                     movie={movie}/>) : movies.map(movie =>
                            <Movie key={movie.id} movie={movie}/>)}}
                    </div>

                    <div className={css.pagination}>
                        <Pagination
                            page={currentPage}
                            count={total_pages > 500 ? 500 : total_pages}
                            onChange={(_, page) => changePage(page)}
                            shape={'rounded'}
                            color={'primary'}
                        />
                    </div>

                </div>
            }
        </div>
    )
}

export {
    MoviesList
}
