import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {useEffect, useRef} from "react";

import css from './Genres.module.css'
import {movieActions} from "../../redux";

const Genres = () => {
    const {genres} = useSelector(state => state.movieReducer)

    const ref = useRef(null)

    const dispatch = useDispatch()

    const setGenre = (id) => {
        dispatch(movieActions.setGenre(id))
    }

    const discardGenres = (id) => {
        dispatch(movieActions.discardGenres(id))
    }

    const handleSubmit = (e, id) => {
        if (e.target.checked) {
            setGenre(id)
        } else {
            discardGenres(id)
        }
    }

    const mainPage = () => {
        dispatch(movieActions.toMainPage())
    }


    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    return (
        <div className={css.Genres}>
            {<NavLink to={'/movies'} onClick={() => mainPage()}><p className={css.toMainPage}>Main Page</p></NavLink>}

            {genres.map(genre =>
                <div key={genre.id} className={css.boxWithGenres}>
                    <label htmlFor={`${genre.name}`}>{genre.name}</label>

                    <input type="checkbox"
                           name={genre.name}
                           onChange={(e) => handleSubmit(e, genre.id)}
                           ref={ref}
                    />

                </div>
            )}
        </div>
    )
}

export {
    Genres
}
