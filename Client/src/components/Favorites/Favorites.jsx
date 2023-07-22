import { useSelector,useDispatch } from "react-redux"
import styles from '../Card/Card.module.css'
import styleFav from '../Cards/Cards.module.css'
import myStyle from '../Favorites/Favorites.module.css'
import { filterCards,orderCards } from "../../redux/actions"
import { useState } from "react"



function Favorites(){

    const [aux,setAux] = useState(false)

    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return(
        <div>
            <div className={myStyle.divSelectores}>
                <div>
                <label className={myStyle.label} htmlFor="">Orden</label>
                <select className={myStyle.selector} onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>
                </div>
                <div>
                <label className={myStyle.label} htmlFor="">Filtro</label>
                <select className={myStyle.selector} onChange={handleFilter}>
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
                </div>
            </div>
        <div className={styleFav.cardContainer}>
            {myFavorites.map(character =>{
                return(
                    <div className={styles.cardContainer} key={character.id}>
                    <p hidden={true}> {character.id}</p>
                    <h1 className={styles.textDetail}>{character.name}</h1>
                    <h3 className={styles.textDetail}>{character.status}</h3>
                    <h3 className={styles.textDetail}>{character.species}</h3>
                    <h3 className={styles.textDetail}>{character.gender}</h3>
                    <h3 className={styles.textDetail}>{character.origin.name}</h3>
                    <img className={styles.imgDetail} src={character.image} alt='' />
                </div>
                )
            })}
        </div>
        </div>
    )
}

export default Favorites