
import React, { useState, useEffect } from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


function Card({character,close}) {


   const [isFav, setIsFav] = useState(false)

   const myFavorites = useSelector(state => state.myFavorites)
   const dispatch = useDispatch()

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,character.id]);  

   const handleFavorite = () => {
      (isFav) ? dispatch(removeFav(character.id)): dispatch(addFav(character))
      setIsFav(!isFav)
   }

   return (
      <div className={styles.cardContainer} key={character.id} transition-style={"in:square:center"}>
         {isFav ? (<button title={"Quitar de Fav"} className={styles.btnFav} onClick={handleFavorite}>❤️</button>) : (<button title={"Agregar a Fav"} className={styles.btnFav} onClick={handleFavorite}>🤍</button>)}
         <button className={styles.buttonClose} onClick={() => {close(character.id);removeFav(character.id)}}>X</button>
         <Link className={styles.links} to={`/detail/${character.id}`}>
            <h1 className={styles.textDetail}>{character.name}</h1>
         </Link>
         <h3 className={styles.textDetail}>{character.status}</h3>
         <h3 className={styles.textDetail}>{character.species}</h3>
         <h3 className={styles.textDetail}>{character.gender}</h3>
         <h3 className={styles.textDetail}>{character.origin.name}</h3>
         <img className={styles.imgDetail} src={character.image} alt={character.name} />
      </div>
   );
}

export default Card
