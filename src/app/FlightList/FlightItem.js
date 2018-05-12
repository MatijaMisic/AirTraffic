import React from 'react';
import airEast from './airEast.jpg'
import airWest from './airWest.jpg'
const FlightItem = ( { flightInfo } ) => {

    const flightIcon = (flightInfo.direction === "E") ? airEast : airWest


    return (
        <li className="collection-item avatar">
            <img src={flightIcon} alt="" className="circle" />
            <span className="title">Flight Number</span>
            <p>{flightInfo.flightNumber}
             </p>
            <p className="secondary-content">{flightInfo.altitude} meters</p>
        </li>
    );
};

export default FlightItem;