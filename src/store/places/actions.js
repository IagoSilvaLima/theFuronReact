import * as types from './actionTypes';
import {call, put} from 'redux-saga';
import furonService from '../../services/furon';


export function listPlaces(){
    return {type : types.REQUEST_LIST_PLACES};
}

export function addPlace(place){
    return {type : types.REQUEST_ADD_PLACE, payload : {place}};
}
