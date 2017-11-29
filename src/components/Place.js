import React from 'react';

const Place = ({place}) => (
    <li className="collection-item">
        <span className="title">{place.name}</span>
    </li>
)


export default Place;