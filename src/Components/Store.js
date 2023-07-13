import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import MainReducer from "./MainReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore( MainReducer,
    {
        items : [],
        totalamount : 0
        
    },
    composeWithDevTools(applyMiddleware(thunk)))

export default store