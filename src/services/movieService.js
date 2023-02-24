import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getAllMovies: (page=1) => axiosService.get(urls.getAllMovies, {params: {page}}),
    getGenres:() => axiosService.get(urls.getGenres),
    getMoviesByGenre: (id, page=1) => axiosService.get(urls.getAllMovies, {params: {'with_genres': id, page}}),
    getSearchMovie: (query, page=1) => axiosService.get(urls.getSearch, {params:{query, page}}),
}

export {
    movieService
}
