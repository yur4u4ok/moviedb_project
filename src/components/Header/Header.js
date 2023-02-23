import {Link, useNavigate} from "react-router-dom";
import ThemeSwitch from 'react-theme-switch-css'

import css from './Header.module.css'


const Header = () => {
    const navigate = useNavigate()

    const setSearchWord = (request) => {
        if(request) {
            navigate(`/search/${request}`)
        }else{

        navigate('/movies')
        }
    }

    return (
        <div className={css.Header}>
            <Link to={'/movies'} className={css.link}>
                <h2>FILMEGOOO</h2>
            </Link>

            <div className={css.searchUserTheme}>
                <input type="text" placeholder={'Enter your movie name'} onChange={e => setSearchWord(e.target.value)}/>

                <div className={css.round}>A</div>
                <ThemeSwitch/>
            </div>

        </div>
    )
}

export {
    Header
}
