import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/Nav';
import axios from 'axios';

function App() {
   
   const [characters,setCharacters] = useState([])

   const onSearch = (id)=>{

      const characterExists = characters.some((character) => character.id === parseInt(id));
      if (characterExists) {
         window.alert('¡El personaje ya existe!');
         return;
      }
      
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((character) => character.id !== parseInt(id)));  
   }

   return (
      <div className='App'>
         <NavBar search ={onSearch} />
         <Cards characters={characters} close={onClose} />
      </div>
   );
}

export default App;
