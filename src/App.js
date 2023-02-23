import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MovieInfo, MoviesList} from "./components";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {SearchPage} from "./pages/SearchPage/SearchPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/movies'}/>}/>
                    <Route path={'/movies'} element={<MoviesList/>}>
                        <Route path={':genreId'} element={<MoviesList/>}/>
                    </Route>
                    <Route path={'/movieInfo/:id'} element={<MovieInfo/>}/>
                    <Route path={'/search/:value'} element={<SearchPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
