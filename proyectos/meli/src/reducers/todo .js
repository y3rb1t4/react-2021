import { ADD_WORK, GET_WORKS, DELETE_WORKS } from "./actions/todo";
import { initialState } from "./products";


const initialState = {
    works : {
        {id: 1 , description : 'la tarea ', status : false, createAt:  ''}
    }
}

export function todoReducer ( state = initialState, action) {
    switch (action.type) {
        case ADD_WORK:
            return {
                works: [
                    ...initialState.works,
                    action.payload.work
                ],
            }
            case GET_WORKS:
                return state.works;
    }

}

