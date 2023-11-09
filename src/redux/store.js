import { createStore, combineReducers} from "redux"; 
import TodoReducer from "./Reducers/TodoReducer";

const rootReducer = combineReducers({
    todos:TodoReducer
    })
const store = createStore(rootReducer);

export default store;