import React, { Component } from 'react';

import { requestServices } from '../../services/requestServices';
import Flight from '../../entities/flight';
import FlightList from './FlightList/FlightList';

class MainPage extends Component {
    constructor() {
        super()
        this.state = {
            warning: 'hideWarning',
            autorization: false,
            lat: 0,
            long: 0,
            loading: true
        }
    }

    


    fetchFlights = (url) => {
        requestServices.getRequest(url)
            .then(response => {
                return response.acList.map((flight) => {
                    return new Flight(flight.Id, flight.Alt, flight.Call, flight.CNum, flight.Man, flight.Mdl, flight.From, flight.To, flight.Op)
                })
            }
            ).then((flights) => { 
                const sortFLightByAltitude = [...flights];
                const sortedFligths = sortFLightByAltitude.sort((a, b) => {
                    return b.altitude - a.altitude
                })
               
                this.setState({ flightList: sortedFligths })
                const savedFlights = JSON.stringify(sortedFligths);
                localStorage.setItem('flights', savedFlights)
                           
            })
            .catch((error) => {
                console.log(error);
                
            });
    }

    componentDidMount() {
   
        navigator.geolocation.getCurrentPosition((position) => {

            this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
            const url = `http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${this.state.lat}&lng=${this.state.long}&fDstL=0&fDstU=100`
            this.setState({ url: url })

            this.fetchFlights(url);
            
        })
        this.setState({ loading: false })

        this.interval = setInterval(() => {
            this.fetchFlights(this.state.url)
        }, 60000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <main className='container'>
               <FlightList flightList={this.state.flightList} loading={this.state.loading}/> 
            </main>
        );
    }
}

export default MainPage;