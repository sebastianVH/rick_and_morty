import {useState } from "react"
import { Validations } from "./validation"
import styles from "./Form.module.css"



export default function Form({login,register}){

    const [userdata,setUserdata] = useState({
        email:"",
        password:"",
        password2:""
    })

    const [errors,setErrors] = useState({
        email:"",
        password:"",
        password2:""
    })

    const [form,setForm] = useState(true)

    const clearData = () => {
        setUserdata({
            email:"",
            password:"",
            password2:""
        })
    }

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

    const handleForm = () => {
        clearData()
        setForm(!form)
    }

    const handleRegister = (e) => {
            e.preventDefault();
            register(userdata)
    }



    return <div className={styles.container}>
    {form ? (<div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <h2 className={styles.loginBanner}>LOGIN</h2>    
                        <label className={styles.inputLabel} htmlFor="email">Email</label>
                        <input type="text" name="email" className={errors.email ? styles.error : styles.success} value={userdata.email} onChange={handleChange}/>
                        <span className={styles.errorText}>{errors.email}</span>
                        <label className={styles.inputLabel} htmlFor="password">Password</label>
                        <input type="password" name="password" className={errors.password ? styles.error : styles.success} value={userdata.password} onChange={handleChange} />
                        <span className={styles.errorText}>{errors.password}</span>
                    <button className={styles.btnSubmit} type="submit">Submit</button>
                    </form>
                    <p>You don't have an account?</p>
                    <button  onClick={handleForm}>Register</button>
                </div>)
                :
                (<div>
                    <form onSubmit={handleRegister} className={styles.form}>
                        <h2 className={styles.loginBanner}>Register</h2>    
                        <label className={styles.inputLabel} htmlFor="email">Email</label>
                        <input type="text" name="email" className={errors.email ? styles.error : styles.success} value={userdata.email} onChange={handleChange}/>
                        <span className={styles.errorText}>{errors.email}</span>
                        <label className={styles.inputLabel} htmlFor="password">Password</label>
                        <input type="password" name="password" className={errors.password ? styles.error : styles.success} value={userdata.password} onChange={handleChange} />
                        <span className={styles.errorText}>{errors.password}</span>
                        <label className={styles.inputLabel} htmlFor="password">Repeat Password</label>
                        <input type="password" name="password2" className={errors.password2 ? styles.error : styles.success} value={userdata.password2} onChange={handleChange} />
                        <span className={styles.errorText}>{errors.password2}</span>
                        <button className={styles.btnSubmit} type="submit">Create Account</button>
                    </form>
                    <p>You have an account?</p>
                    <button  onClick={handleForm}>Login</button>
                </div>) }
            </div>
}