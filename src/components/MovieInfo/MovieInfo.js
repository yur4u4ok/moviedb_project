import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Rating} from "@mui/material";

import css from './MovieInfo.module.css'
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
            backdrop_path,
            genre_ids
        }
    } = useLocation()


    const {genres} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    const image = `https://image.tmdb.org/t/p/w300${poster_path}`

    const anotherImage = `https://image.tmdb.org/t/p/w300${backdrop_path}`


    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])


    const findGenre = (id) => {
        const genre = genres.find(item => item.id === id)
        return genre?.name
    }


    return (
        <div>

            <div className={css.title}>
                <h4 className={css.h4Title}>{title}</h4>
            </div>

            <div className={css.ImageAndInfo}>

                <div>
                    <img className={css.image} src={image} alt={title}/>
                    <div className={css.divForBadges}>
                        {genre_ids?.map(item => <Link key={item} to={`/movies/${item}`}>
                            <div key={item} className={css.badge}>{findGenre(item) + ' '}</div>
                        </Link>)}
                    </div>
                </div>

                <div>
                    <div>
                        <img src={anotherImage} alt={title}/>
                    </div>

                    <Rating name="half-rating-read"
                            defaultValue={vote_average}
                            max={10}
                            size={'medium'}
                            precision={0.5} readOnly
                    /> {''} ({vote_average})

                    <h4>Description</h4>
                    <p>{overview}</p>

                    <h4>Release Date</h4>
                    <p>{release_date}</p>

                    <h4>Original Language</h4>
                    <p>{original_language.toUpperCase()}</p>

                </div>
            </div>

        </div>
    )
}

export {
    MovieInfo
}
