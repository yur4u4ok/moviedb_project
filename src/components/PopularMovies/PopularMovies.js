import {Slide} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";

import {movieActions} from "../../redux";
import "./styles.css";
import css from "../Movie/Movie.module.css";


const PopularMovies = () => {
    const {popularMovies} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    const baseImageUrl = 'https://image.tmdb.org/t/p/w200'

    useEffect(() => {
        dispatch(movieActions.getPopularMovies())
    }, [dispatch])


    return (
        <div className="slide-container">
            <h3 className={"titlePopular"}>Popular Movies</h3>

            <Slide slidesToShow={4} indicators={true}>
                {popularMovies.map(item =>
                    <Link to={`/movieInfo/${item.id}`} state={{...item}} className={css.link} key={item.id}>
                        <div className="each-fade" key={item.id}>
                            <img src={`${baseImageUrl}/${item.poster_path}`} alt={item.title}/>
                            <p>{item.title}</p>
                        </div>
                    </Link>
                )}
            </Slide>
        </div>


    )
}

export {
    PopularMovies
}
