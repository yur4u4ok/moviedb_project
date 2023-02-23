import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './MovieInfo.module.css'
import {Rating} from "@mui/material";
import {movieActions} from "../../redux";


const MovieInfo = () => {
    const {
        state: {
            original_language,
            release_date,
            vote_average,
            overview,
            title,
            poster_path,
            genre_ids
        }
    } = useLocation()

    const {genres} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    const image = `https://image.tmdb.org/t/p/w300${poster_path}`

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])

    const findGenre = (id) => {
        const genre = genres.find(item => item.id === id)
        return genre?.name
    }


    return (
        <div className={css.MovieInfo}>

            <div className={css.title}>
                <h3>{title}</h3>
            </div>

            <div className={css.ImageAndInfo}>
                <div>
                    <img className={css.image} src={image} alt={title}/>
                    <div className={css.divForBadges}>
                        {genre_ids?.map(item => <div key={item} className={css.badge}>{findGenre(item) + ' '}</div>)}
                    </div>
                </div>
                <div>
                    <Rating name="half-rating-read"
                            defaultValue={vote_average}
                            max={10}
                            size={'medium'}
                            precision={0.5} readOnly
                    /> {''} ({vote_average})

                    <h4>Description</h4>{overview}

                    <h4>Release Date</h4>
                    {release_date}

                    <h4>Original Language</h4>
                    {original_language.toUpperCase()}

                    <h4>Genres</h4>
                    {genre_ids?.map(item => <span key={item}>{findGenre(item) + ' ; '}</span>)}
                </div>

            </div>
        </div>
    )
}

export {
    MovieInfo
}
