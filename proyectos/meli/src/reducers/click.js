import { PLUS, MINUS } from "./actions/click";
export const initialState = 0;
//funcion pura
export function clickReducer(state = initialState, action) {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
}

/*
function clickReducer(state,action) {
    if (action.type === ' PLUS' {
        // do stuff 
    }else if (action.type === MINUS){
        //hago otra cosa 
        return state - 1 ;
    } else {
        return state;
    })
}

const sumar = (a, b) => {
  return a + b;
};
**/
