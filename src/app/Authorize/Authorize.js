import React from 'react';
import { Link } from 'react-router-dom'
import './Authorize.css'

const Authorize = () => {

    let show = "hideWarning";

    const isAuthorized = () => {
        localStorage.setItem('authorized', 'true')
    }


    const displayWarning = () => {
        show = "showWarning"
    }

    console.log(show);
    
    return (
        <div className="row welcomeText">

                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <p>Please authorize your geolocation</p>
                        </div>
                        <div className="card-action">
                            <Link to='/'><p className="waves-effect waves-light btn-large" onClick={isAuthorized}>Yes</p></Link>
                            <br />
                            <br />
                            <a className="waves-effect waves-light btn-large" onClick={displayWarning}>No</a>
                        </div>
                        <div className={`card-action ${show}`}>
                            <p>Please authorize geolocation</p>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Authorize;