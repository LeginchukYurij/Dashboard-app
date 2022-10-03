import { ADD_POSTION } from "./position-actions";

export const positionReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_POSTION:
            return action.positions;

        default:
            return state;
    }
}