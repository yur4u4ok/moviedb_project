import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    moviesByGenre: [],
    searchMovies: [],
    thisPage: null,
    total_pages: null,
    loading: false,
    errors: null
}

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({page}, thunkAPI) => {
        try{
            const {data} = await movieService.getAllMovies(page)
            return data
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async(_, thunkAPI) => {
        try{
            const {data} = await movieService.getGenres()
            return data
        }
        catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async({genreId, page}, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviesByGenre(genreId, page)
            return data
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMoviesBySearch = createAsyncThunk(
    'movieSlice/getMoviesBySearch',
    async({value}, thunkAPI) => {
        try {
            const {data} = await movieService.getSearchMovie(value)
            return data
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.movies = results
                state.thisPage = page
                state.total_pages = total_pages
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres, total_pages} = action.payload
                state.genres = genres
                state.total_pages = total_pages
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.moviesByGenre = results
                state.thisPage = page
                state.total_pages = total_pages
            })
            .addCase(getMoviesBySearch.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.searchMovies = results
                state.thisPage = page
                state.total_pages = total_pages
            })
})

const {reducer: movieReducer} = movieSlice

const movieActions = {
    getAllMovies,
    getGenres,
    getMoviesByGenre,
    getMoviesBySearch
}

export {
    movieReducer,
    movieActions
}
