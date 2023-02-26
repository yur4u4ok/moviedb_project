import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getAllMovies: (page=1) => axiosService.get(urls.getAllMovies, {params: {page}}),
    getGenres:() => axiosService.get(urls.getGenres),
    getMoviesByGenre: (genres, page=1) => axiosService.get(`${urls.getAllMovies}?&page=${page}&with_genres=${genres}`),
    getSearchMovie: (query, page=1) => axiosService.get(urls.getSearch, {params:{query, page}}),
    getPopularMovies: () => axiosService.get(urls.getPopular)
}

export {
    movieService
}
