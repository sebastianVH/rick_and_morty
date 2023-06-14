import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../Nav/Nav.module.css"

export default function NavBar({search}){

    const autoSelect = () => {
        const randomNumber = Math.floor(Math.random() * 826) + 1;
        search(randomNumber)
    }

    return(
        <div className={styles.navSearch}>
            <button onClick={() => autoSelect()} className={styles.randomButton}>Random Select</button>
            <SearchBar search={search}/>
        </div>
            
    )
}