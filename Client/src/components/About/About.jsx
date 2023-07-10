import styles from "../About/About.module.css"
import miImagen from "../../assets/img/img-perfil.jpg"

export default function About() {
    return(
        <div className={styles.aboutDiv}>
            <a href="https://www.linkedin.com/in/sebastian-yacono/" target={"_blank"} title={"Click para ir a mi LinkedIn"} ><img src={miImagen} className={styles.miImg} alt="" /></a>
            <div >
                <h1>Sobre mi</h1>
                <p>Mi nombre es Sebastian y soy desarrollador FullStack.</p>
                <p>Este es mi proyecto de Rick y Morty realizado en React.</p>
                <p>Me hubiese gustado hacer el de Ricky Martin, pero sera el proximo...</p>
            </div>
        </div>
    )
}