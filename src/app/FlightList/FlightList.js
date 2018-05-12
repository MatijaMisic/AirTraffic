import React from 'react';
import FlightItem from './FlightItem';
import loading from './gif-aviao.gif';

import './FlightList.css'

const FlightList = ( {flightList} ) => {

    let flightItem = null;

    if(!flightList) {
        flightItem = <img src={loading} alt='loading' className="loading" />;
    } else {
        flightItem = flightList.map((flight, index) => {
            return <FlightItem key={index} flightInfo = {flight} />
        })
    }
   

    return (
        <div className="row">
            <ul className="collection">
               {flightItem}
            </ul>
        </div>
    );
};

export default FlightList;