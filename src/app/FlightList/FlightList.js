import React from 'react';
import FlightItem from './FlightItem';

const FlightList = ( {flightList, loading} ) => {

    let flightItem = null;

    if(!flightList) {
        flightItem = (<div> </div>)
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