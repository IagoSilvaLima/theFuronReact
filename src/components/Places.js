import React from 'react';
import Place from './Place';

const Places = ({places}) => (
    <div className="card">
        <div className="card-content">
            <span className="card-title">
                Lugares
            </span>
            <hr/>
            <ul className="collection">
                {

                    places.map((place,index) =>{
                        return (<Place key={index.toString()} place={place}></Place>);
                    })
                }
            </ul>
        </div>
    </div>
)

export default Places;