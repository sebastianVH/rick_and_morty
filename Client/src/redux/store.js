// import { createStore } from "redux";
// import reducer from './reducer'
// import thunk from 'redux-thunk'


// export const store = createStore(reducer)

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer'
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

