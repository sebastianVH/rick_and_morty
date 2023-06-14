
import React from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";

export default function Card({character, close}) {
   return (
      <div className={styles.cardContainer}>
         <button className={styles.buttonClose} onClick={() => close(character.id)}>X</button>
         <Link className={styles.links} to={`/detail/${character.id}`}>
            <h1 className={styles.textDetail}>{character.name}</h1>
         </Link>
         <h3 className={styles.textDetail}>{character.status}</h3>
         <h3 className={styles.textDetail}>{character.species}</h3>
         <h3 className={styles.textDetail}>{character.gender}</h3>
         <h3 className={styles.textDetail}>{character.origin.name}</h3>
         <img className={styles.imgDetail} src={character.image} alt='' />
      </div>
   );
}
