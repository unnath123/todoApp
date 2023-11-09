import { ADDTOLIST,DELETE, EDIT } from "../Actions/TodoActions";

let initialState = [];

const TodoReducer = (state=initialState, actions) =>{
    switch (actions.type) {
        case ADDTOLIST: 
            return [...state, actions.payload]
        case DELETE:
            return state.filter((ele)=>(
                ele.id!== actions.payload 
            )) 
        case EDIT:
            return state.map((ele) =>
            ele.id === actions.payload.id ? { ...ele, ...actions.payload } : ele
          );
        default:
            return state; 
    }
}

export default TodoReducer