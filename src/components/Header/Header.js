import {Link, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {useRef} from "react";


const Header = () => {
    const inputValue = useRef()
    const navigate = useNavigate()

    const setSearchWord = () => {
        navigate(`/search/${inputValue.current.value}`)
        inputValue.current.value = ''
    }

    return (
        <div className={css.Header}>
            <Link to={'/movies'} className={css.link}>
                <h2>FILMEGOOO</h2>
            </Link>

            <div className={css.searchUserTheme}>
                <input type="text" placeholder={'Enter your movie name'} ref={inputValue}/>
                <button onClick={() => setSearchWord()}>Search</button>

                <div className={css.round}>A</div>
                <div className={css.round}></div>
            </div>

        </div>
    )
}

export {
    Header
}
