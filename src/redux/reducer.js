import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from './actions'

const initialState = {
    myFavorites: [],
    allCharacters:[],
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    console.log(action.payload);
    switch(action.type){
        case ADD_FAV:
            return {...state, allCharacters: [...state.allCharacters, action.payload], myFavorites:[...state.myFavorites,action.payload]}
        case REMOVE_FAV:
            return {...state, myFavorites: state.myFavorites.filter((char) => char.id !== parseInt(action.payload)),allCharacters: state.allCharacters.filter((char) => char.id !== parseInt(action.payload))}
        case FILTER:
            return {...state, myFavorites: (!action.payload) ? state.allCharacters : state.allCharacters.filter((char)=> char.gender === action.payload)}
        case ORDER:
            return {...state, myFavorites: state.allCharacters.sort((a,b) => {return (action.payload === "A")? (a.id-b.id):(b.id-a.id)} ) }
        default:
            return {...state}
    }
}

export default reducer