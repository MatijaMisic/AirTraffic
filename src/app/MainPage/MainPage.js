import React, { Component } from 'react';
import Authorize from '../Authorize/Authorize';
import './MainPage.css'
import { requestServices } from '../../services/requestServices';
import Flight from '../../entities/flight';
import FlightList from '../FlightList/FlightList';

class MainPage extends Component {
    constructor(){
        super()
        this.state = {
            warning: 'hideWarning',
            autorization: false,
            lat: 0,
            long: 0,
            loading: true
        }
    }

    authorizeHandler = (answer) => {
        if (answer) {
            this.setState({warning:'hideWarning', autorization:true})

            navigator.geolocation.getCurrentPosition((position) => {
                
                this.setState({lat: position.coords.latitude, long: position.coords.longitude})
                const url = `http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${this.state.lat}&lng=${this.state.long}&fDstL=0&fDstU=100`
                this.setState({url:url})

               this.fetchFlights(url);
                
            })
            
        } else {
           this.setState({warning:'showWarning'})
        }
    }

    fetchFlights = (url) => {
        requestServices.getRequest(url)
        .then(response => {
           console.log(response);
           
            return response.acList.map((flight) => {
                return new Flight (flight.Alt, flight.Call, flight.CNum)
            })
        }
        ).then((flights) => {
            const sortFLightByAltitude = [...flights];
            const sortedFligths = sortFLightByAltitude.sort((a, b) => {
                return b.altitude - a.altitude
            })
            
            this.setState({flightList : sortedFligths})
            
        });
    }
    
    componentDidMount () {
        this.setState({loading:false})
        setInterval( () => {
            this.fetchFlights(this.state.url)
            console.log("novi fetch");
            
           },60000)
    }

    componentWillUnmount() {
        clearInterval(this.fetchFlights());
      }

    render() {
        return (
            <div className='container background'>
            {this.state.autorization ? <FlightList flightList={this.state.flightList} loading={this.state.loading}/> : <Authorize authorize = {this.authorizeHandler} show={this.state.warning}/>}
            </div>
        );
    }
}

export default MainPage;