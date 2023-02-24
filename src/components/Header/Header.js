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

                <div className={css.round}>
                    <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt={"Admin"}/>
                </div>

                <div className={css.hide}>
                    Hello, Admin
                </div>

                <ThemeSwitch/>

            </div>

        </div>
    )
}

export {
    Header
}
