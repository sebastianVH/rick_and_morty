
import React, { useState, useEffect } from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";
import { addFav,removeFav } from "../../redux/actions";
import { connect } from "react-redux";


function Card({character, close, addFav, removeFav, myFavorites}) {


   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,character.id]);

   const handleFavorite = () => {
      (isFav) ? removeFav(character.id): addFav(character)
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
         <img className={styles.imgDetail} src={character.image} alt='' />
      </div>
   );
}

export const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export function mapStateToProps(state) {
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)
