import { useEffect, useState } from 'react';
import './App.css';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/Nav';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/actions';



function App() {
   
   const { pathname } = useLocation()
   const [characters,setCharacters] = useState([])
   const access = useSelector(state => state.setUser.access)
   const dispatch = useDispatch()

   const onSearch = async (id)=>{

      const characterExists = characters.some((character) => character.id === parseInt(id));
      if (characterExists) {
         window.alert('¡El personaje ya fue agregado!');
         return;
      }
      try {
         const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
         setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
         window.alert(error.response.data.error)
      }
;
   }

   const onClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((character) => character.id !== parseInt(id)));  
   }
      
   const navigate = useNavigate()

   const accessUser = (data) => {
      const { access } = data;
      //setAccess(access);
      access && navigate('/home');
   }

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      
        axios.post(URL,{email:email, password:password})
        .then(({ data }) => {
         dispatch(setUser(data))
         accessUser(data)
         }).catch( error => alert(error.response.data.error))
         
   }

   const register = (userData) => {
      const {email, password} = userData
      axios.post('http://localhost:3001/rickandmorty/register/',{email:email, password:password})
      .then(({data}) => {
            accessUser(data)
      })
      .catch(error => alert(error.response.data.error))
   }

   useEffect(() => {
      !access && navigate('/')
      }, [access,navigate])

   return (
      <div className='App'>
         {pathname !== '/' && <NavBar search ={onSearch} />}
         <Routes> 
            <Route path="/" element={<Form login={login} register={register} />}/>
            <Route path="/favorites" element={<Favorites close={onClose} />}/>
            <Route path="/home" element={<Cards characters={characters} close={onClose} />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;
