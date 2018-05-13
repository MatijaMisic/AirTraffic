import React from 'react';
import { Link } from 'react-router-dom';

import airEast from './airEast.jpg'
import airWest from './airWest.jpg'



const FlightItem = ( { flightInfo } ) => {

    const flightIcon = (flightInfo.direction === "E") ? airEast : airWest


    return (
        <Link key={flightInfo.id} to={`flight/${flightInfo.id}`}> <li className="collection-item avatar">
       <div className="col s12 m4">
            <img src={flightIcon} alt="" className="circle" />
            </div>
            <div className="col s12 m4">
            <p className="flightNumber">{flightInfo.flightNumber}
             </p>
             </div>
             <div className="col s12 m4">
            <p className="secondary-content">{flightInfo.altitude}</p>
            </div>
        </li></Link>
    );
};

export default FlightItem;