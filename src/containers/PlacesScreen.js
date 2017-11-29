import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as placesActions from '../store/places/actions';

import Places from '../components/Places';
import PlaceForm from '../components/PlaceForm';

class PlacesScreen extends Component{
    
    componentDidMount(){
        this.props.listPlaces();
    }

    render(){
        return (
            <div>
                <div className="col s6">
                    <Places places={this.props.places}></Places>
                </div>
                <div className="col s6">
                    <PlaceForm addPlace={this.props.addPlace}></PlaceForm>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        places : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlace : place =>{
            dispatch(placesActions.addPlace(place));
        },
        listPlaces : ()=>{
            dispatch(placesActions.listPlaces());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);