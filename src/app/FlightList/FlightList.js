import React from 'react';
import FlightItem from './FlightItem';
import loading from './gif-aviao.gif';

import './FlightList.css'

const FlightList = ({ flightList }) => {

    let flightItem = null;

    if (!flightList) {
        flightItem = <img src={loading} alt='loading' className="loading" />;
    } else {
        flightItem = flightList.map((flight, index) => {
            return <FlightItem key={flight.id} flightInfo={flight} />
        })
    }


    return (
        <div className="row">
            <ul className="collection">
                <li className="collection-item avatar listHeader">
                    <div className="col s12 m4">
                    <img src='{flightIcon}' alt="" className="circle" />
                    </div>
                    <div className="col s12 m4">
                       
                        <p className="flightNumberHeader">Flight Number
                        </p>
                    </div>
                    <div className="col s12 m4">
                        <p className="secondary-content">Altitude(m)</p>
                    </div>
                </li>
                {flightItem}
            </ul>
        </div>
    );
};

export default FlightList;