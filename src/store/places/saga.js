import {call, put , takeLatest} from 'redux-saga/effects';
import * as types from './actionTypes';
import furonService from '../../services/furon';

function* loadPlaces(){
    const places = yield call(furonService.listPlaces);
    yield put({type : types.LIST_PLACES, places})
}

function* addPlace(action) {
    const place = yield call(furonService.addPlace, action.payload.place);
    yield put({type : types.ADD_PLACE, place});
}


function* placeSaga(){
    yield takeLatest(types.REQUEST_ADD_PLACE, addPlace);
    yield takeLatest(types.REQUEST_LIST_PLACES, loadPlaces);
}

export default placeSaga;