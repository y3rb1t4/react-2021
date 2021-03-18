import { SET_USER, GET_USER } from "./actions/user";
export const initialState = {
  user: "",
  password: "",
};

// action : { type : '' , payload : {}}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload.user,
        password: action.payload.password,
      };
    case GET_USER:
      return state;
    default:
      return state;
  }
}
