import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    moviesByGenre: [],
    searchMovies: [],
    selectedGenre: [],
    currentPage: 1,
    currentSearchPage: 1,
    total_pages: null,
    loading: false,
    errors: null
}

const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async ({currentPage}, thunkAPI) => {
        try {
            const {data} = await movieService.getAllMovies(currentPage)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getGenres()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMoviesByGenre = createAsyncThunk(
    'movieSlice/getMoviesByGenre',
    async ({selectedGenre, currentPage}, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviesByGenre(selectedGenre, currentPage)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMoviesByOneGenre = createAsyncThunk(
    'movieSlice/getMoviesByOneGenre',
    async ({genreId, currentPage}, thunkAPI) => {
        try {
            const {data} = await movieService.getMoviesByGenre(genreId, currentPage)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const getMoviesBySearch = createAsyncThunk(
    'movieSlice/getMoviesBySearch',
    async ({value, currentSearchPage}, thunkAPI) => {
        try {
            const {data} = await movieService.getSearchMovie(value, currentSearchPage)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },

        setSearchPage: (state, action) => {
            state.currentSearchPage = action.payload
        },
        setGenre: (state, action) => {
            state.selectedGenre.push(action.payload)

        },
        discardGenres: (state, action) => {
            let indexGenreToDelete = state.selectedGenre.findIndex(elem => elem === action.payload)
            state.selectedGenre.splice(indexGenreToDelete, 1);
        },
        toMainPage: (state) => {
            state.selectedGenre.length = 0
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.movies = results
                state.thisPage = page
                state.total_pages = total_pages
                state.loading = false
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true
            })

            .addCase(getGenres.fulfilled, (state, action) => {
                const {genres, total_pages} = action.payload
                state.genres = genres
                state.total_pages = total_pages
                state.loading = false
            })
            .addCase(getGenres.pending, (state) => {
                state.loading = true
            })

            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.moviesByGenre = results
                state.thisPage = page
                state.total_pages = total_pages
                state.loading = false
            })
            .addCase(getMoviesByGenre.pending, (state) => {
                state.loading = true
            })

            .addCase(getMoviesByOneGenre.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.moviesByGenre = results
                state.thisPage = page
                state.total_pages = total_pages
                state.loading = false
            })
            .addCase(getMoviesByOneGenre.pending, (state) => {
                state.loading = true
            })

            .addCase(getMoviesBySearch.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload
                state.searchMovies = results
                state.thisPage = page
                state.total_pages = total_pages
                state.loading = false
            })
            .addCase(getMoviesBySearch.pending, (state) => {
                state.loading = true
            })

})

const {
    reducer: movieReducer,
    actions: {setCurrentPage, setSearchPage, setGenre, discardGenres, toMainPage}
} = movieSlice

const movieActions = {
    getAllMovies,
    getGenres,
    getMoviesByGenre,
    getMoviesBySearch,
    getMoviesByOneGenre,
    setCurrentPage,
    setSearchPage,
    setGenre,
    discardGenres,
    toMainPage
}

export {
    movieReducer,
    movieActions
}
