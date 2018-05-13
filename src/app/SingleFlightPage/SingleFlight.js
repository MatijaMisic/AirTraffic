import React from 'react';

import airbus from '../../assets/img/airbus.jpg';

const SingleFlight = (props) => {

    const id = parseInt(props.match.params.id, 0);
    const flightList = JSON.parse(localStorage.getItem('flights'))


    let selectedFLight = null;

    flightList.forEach(flight => {
        if (id === flight.id)
            selectedFLight = flight
    });

    return (
        <div className="row container">
            <div className="col s12 m12">
                <div className="card">
                    <div className="card-image">
                        <img  src={airbus} alt='single flight background' />
                        <span className="card-title col s3"><img src='//logo.clearbit.com/turkishairlines.com' alt='company logo' /></span>
                    </div>
                    <div className="row card-content">
                        <div className="col s12">
                            <h3><span className='singleFlight'>Flight origin:</span> {selectedFLight.originAirport}</h3>
                            <h3><span className='singleFlight'>Destination:</span> {selectedFLight.destinationAirport}</h3>
                        </div>
                        <div className="col s12">
                            <h3><span className='singleFlight'>Airplane:</span> {selectedFLight.model}</h3>
                        </div>
                        <div className="col s12">
                            <h3><span className='singleFlight'>Company:</span>{selectedFLight.logo}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFlight;