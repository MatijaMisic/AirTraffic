import React from 'react';
import airEast from './airEast.jpg'
import airWest from './airWest.jpg'



const FlightItem = ( { flightInfo } ) => {

    const flightIcon = (flightInfo.direction === "E") ? airEast : airWest


    return (
        <li className="collection-item avatar">
        <div className="col s12 m4">
            <img src={flightIcon} alt="" className="circle" />
            </div>
            <div className="col s12 m4">
            <span className="title">Flight Number</span>
            <p className="flightNumber">{flightInfo.flightNumber}
             </p>
             </div>
             <div className="col s12 m4">
            <p className="secondary-content">{flightInfo.altitude} meters</p>
            </div>
        </li>
    );
};

export default FlightItem;