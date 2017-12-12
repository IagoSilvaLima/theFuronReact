import { createLogic, createLogicMiddleware } from 'redux-logic';
import * as types from './actionTypes';
import furonService from '../../services/furon';

const placesFetchLogic = createLogic({
    type: types.REQUEST_LIST_PLACES,
    latest: true,

    process({ service }, dispatch, done) {
        service.listPlaces()
            .then(places => dispatch({
                type : types.LIST_PLACES,
                places
            })).then(() => done());
    }
})

const deps = {
    service: furonService
}

export default createLogicMiddleware([placesFetchLogic], deps);
