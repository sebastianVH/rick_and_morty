
import React from "react";
import styles from './Card.module.css'


export default function Card({character, close}) {
   return (
      <div className={styles.cardContainer}>
         <button className={styles.buttonClose} onClick={() => close(character.id)}>X</button>
         <h2 className={styles.textDetail}>{character.name}</h2>
         <h2 className={styles.textDetail}>{character.status}</h2>
         <h2 className={styles.textDetail}>{character.species}</h2>
         <h2 className={styles.textDetail}>{character.gender}</h2>
         <h2 className={styles.textDetail}>{character.origin.name}</h2>
         <img className={styles.imgDetail} src={character.image} alt='' />
      </div>
   );
}
