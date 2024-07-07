import React, {useEffect, useState} from "react";
import styles from './NavBar.module.css';
import logo from '../../assets/file.png'
import miniProfile from '../../assets/mini-profile.png'
import {useDispatch, useSelector} from "react-redux";
import {getMyInfo} from "../../api/api.auth";
import {setImage} from "../../redux/UserSlice/UserSlice";

const NavBar = () => {
    const BASE_URL = 'https://vstrechya.space'
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth);
    const userImage = useSelector(state => state.user.image);
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    useEffect(() => {
        const fetchData = async () => {
            await getMyInfo().then((response) => {
                dispatch(setImage(response.data.image_url))
            }).catch(err => console.log('Error: ', err));
        }
        fetchData()
    }, [isAuth]);
    return <>
        <header>
            <nav className={styles.navbar}>
                <a className={styles.home} href="/"><img src={logo} width="240" alt='Home'/> </a>
                <ul className={`${styles.navigation} ${menuActive ? styles.active : ''}`}>
                    <li>
                        <button className={styles.navButtons} onClick={() => window.location.assign(`${BASE_URL}/exhibitions`)}>КАТАЛОГ
                            ВЫСТАВОК
                        </button>
                    </li>

                    <li>
                        <button className={styles.navButtons} onClick={() => window.location.assign(`${BASE_URL}/collections`)}>ХРАНИЛИЩЕ
                            КОЛЛЕКЦИЙ
                        </button>
                    </li>
                    <li>
                        <button className={styles.navButtons} onClick={() => window.location.assign(`${BASE_URL}`)}>КОНСТРУКТОР ВЫСТАВОК
                        </button>
                    </li>
                    <li>
                        <button className={styles.navButtons} onClick={() => window.location.assign(`${BASE_URL}`)}>СОЦИАЛЬНЫЕ СЕТИ</button>
                    </li>
                    {isAuth ?
                        <a className={styles.profile} href={BASE_URL + "/profile"}><img className={styles.profile_img}
                                                                           src={userImage ? userImage : miniProfile}
                                                                           alt='Home'/> </a> :
                        <div className={styles.loginBox}>
                            <a className={styles.loginButton} href={"/login"}>ВХОД</a>
                        </div>
                    }
                </ul>
            </nav>
            <div className={styles.line}></div>
            <button className={styles.menu_toggle} aria-label="Open Navigation Menu" onClick={toggleMenu}>
                ☰
            </button>
        </header>
        <div className={styles.header_placeholder}></div>
    </>
}

export default NavBar;
