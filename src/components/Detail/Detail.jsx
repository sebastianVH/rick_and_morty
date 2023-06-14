import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "../Detail/Detail.module.css"

export default function Detail() {

    const {id}= useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
            console.log(data);
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div className={styles.divDetail}>
            <div className={styles.divContenido}>
                <h1>{character.name}</h1>
                <h1>{character.status}</h1>
                <h1>{character.species}</h1>
                <h1>{character.gender}</h1>
                <h1>{"character.origin.name"}</h1>
            </div>
            <div className={styles.divImagen}>
                <img src={character.image} alt="" srcset="" />
            </div>
        </div>
    )
}