import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import About from "../About/About";
import styles from "../Nav/Nav.module.css"

import { Link } from "react-router-dom";

    export default function NavBar({search}){
    
    const rutaActual = window.location.pathname;
    
    const autoSelect = () => {
        const randomNumber = Math.floor(Math.random() * 826) + 1;
        search(randomNumber)
    }

    return(
        <div className={styles.navSearch}>
            <div className={styles.linksNav}>            
                <Link className={styles.links} to='/home'> Home </Link>
                <Link className={styles.links} to='/about'> About </Link>
                <Link className={styles.links} to='/favorites'> Favorites </Link>
                <Link className={styles.links} to='/'> LogOut </Link>
            </div>
            {rutaActual ==='/home' && <button onClick={() => autoSelect()} className={styles.randomButton}>Random Select</button>}
            <SearchBar search={search}/>
        </div>
            
    )
}
