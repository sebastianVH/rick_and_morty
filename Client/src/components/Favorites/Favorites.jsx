import { useSelector,useDispatch } from "react-redux"
import styles from '../Card/Card.module.css'
import styleFav from '../Cards/Cards.module.css'
import myStyle from '../Favorites/Favorites.module.css'
import { filterCards,orderCards,removeFav } from "../../redux/actions"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Favorites(){

    const [aux,setAux] = useState(false)

    const myFavorites = useSelector((state) => state.allCharacters)
    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    useEffect(()=>{
        dispatch(filterCards(""))
    },[dispatch])

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
                    <button title={"Remover de Favoritos"} className={myStyle.buttonClose} onClick={() => {dispatch(removeFav(character.id))}}>X</button>
                    <img className={styles.imgDetail} src={character.image} alt='' />
                    <p hidden={true}> {character.id}</p>
                    <Link className={styles.links} to={`/detail/${character.id}`}>
                        <h1 className={styles.textDetail}>{character.name}</h1>
                    </Link>
                    <h3 className={styles.textDetail}>{character.status}</h3>
                    <h3 className={styles.textDetail}>{character.species}</h3>
                    <h3 className={styles.textDetail}>{character.gender}</h3>
                    <h3 className={styles.textDetail}>{character.origin.name}</h3>
                </div>
                )
            })}
        </div>
        </div>
    )
}

export default Favorites