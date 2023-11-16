import styles from "../About/About.module.css"
import miImagen from "../../assets/img/img-perfil.jpg"

export default function About() {
    return(
        <div className={styles.aboutDiv}>
            <a href="https://www.linkedin.com/in/sebastian-yacono/" target={"_blank"} rel="noreferrer" title={"Click para ir a mi LinkedIn"} ><img src={miImagen} className={styles.miImg} alt="" /></a>
            <div >
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.text}>My name is Sebastian Yacono and i'm a Full Stack Developer</p>
                <p className={styles.text}>This is my Rick And Morty Project, created in the Henry Bootcamp.</p>
                <p className={styles.text}>Click on my profile pic to go to my LinkedIn</p>
            </div>
        </div>
    )
}