import {Outlet} from "react-router-dom";

import {Genres, Header} from "../../components";
import css from './MainLayout.module.css'

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
