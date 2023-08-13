import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from './actions'

const initialState = {
    myFavorites: [],
    allCharacters:[],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload, allCharacters:action.payload };
        case FILTER:
            return {...state, allCharacters: (!action.payload) ? state.myFavorites : state.myFavorites.filter((char)=> char.gender === action.payload)}
        case ORDER:
            return {...state, myFavorites: state.allCharacters.sort((a,b) => {return (action.payload === "A")? (a.id-b.id):(b.id-a.id)} ) }
        default:
            return {...state}
    }
}

export default reducer