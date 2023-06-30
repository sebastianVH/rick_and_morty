import { useState } from "react"
import { Validations } from "./validation"
import styles from "./Form.module.css"
import imagen from "../../assets/img/login.jpg"


export default function Form({login}){

    const [userdata,setUserdata] = useState({
        email:"",
        password:""
    })

    const [errors,setErrors] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        const property = e.target.name
        const value = e.target.value
        setErrors(Validations({...userdata, [property]:value}))
        setUserdata({...userdata, [property]: value})
    } 

    const handleSubmit = (e) =>{
        e.preventDefault();
        login(userdata)
    }

    return <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                    <img src={imagen} className={styles.imagen} alt="" />
                    
                    <label className={styles.inputLabel} htmlFor="email">Email</label>
                    <input type="text" name="email" className={errors.email ? styles.error : styles.success} value={userdata.email} onChange={handleChange}/>
                    <span>{errors.email}</span>
                
                    <label className={styles.inputLabel} htmlFor="password">Password</label>
                    <input type="password" name="password" className={errors.password ? styles.error : styles.success} value={userdata.password} onChange={handleChange} />
                    <span>{errors.password}</span>
                
                    <button type="submit">Submit</button>
            </form>
            </div>
}