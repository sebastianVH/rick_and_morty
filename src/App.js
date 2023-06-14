import { useState } from 'react';
import './App.css';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/Nav';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

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
         <Routes> 
            <Route path="/home" element={<Cards characters={characters} close={onClose} />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>} />
         </Routes>
         
      </div>
   );
}

export default App;
