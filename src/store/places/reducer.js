import * as types from './actionTypes';

const initialState = [];

export default function reduce(state = initialState, action = {}){
    switch(action.type) {
        case types.LIST_PLACES:
            return action.places;
        case types.ADD_PLACE:
            return [...state, action.place];
        default:
            return state;
    }
}
