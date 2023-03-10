import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import css from './MainLayout.module.css'
import {Genres} from "../Genres/Genres";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className={css.MainLayout}>
                <Genres/>
                <Outlet/>
            </div>
        </div>
    )
}

export {
    MainLayout
}
