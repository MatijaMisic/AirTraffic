import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import plane from '../../assets/img/plane.gif'

class Authorize extends Component {
    constructor() {
        super()
        this.state = {
            showWarning: 'hideWarning'
        }
    }


    isAuthorized = () => {
        localStorage.setItem('authorized', 'true')
    }


    displayWarning = () => {
        this.setState({ showWarning: "showWarning" })
    }

    render() {
        return (
            <div className="row welcomeText container">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <img className='plane' src={plane} alt='welcome logo' />
                            <h1>Welcome to Air Traffic Control!</h1>
                            <h3>In order to check Air Traffic near you, you must authorize us to use your geolocation</h3>
                        </div>
                        <div className="card-action">
                            <Link to='/'><p className="btn-large" onClick={this.isAuthorized}>Allow</p></Link>
                            <p className="btn-large" onClick={this.displayWarning}>Deny</p>
                        </div>
                        <div className={`card-action ${this.state.showWarning}`}>
                            <p>If you do not authorize, you can't proceed further</p>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default Authorize;