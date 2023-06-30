import React from "react";
import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar({search}) {
   const [id,setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }
   

   return (
      <div className={styles.container}>
         <input className={styles.search} onChange={handleChange} type='search' placeholder="Ingrese el id..." />
         <button className={styles.btnAgregar} onClick={() => search(id)}>Agregar</button>
      </div>
   );
}
