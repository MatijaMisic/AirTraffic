import React from 'react';
import './Authorize.css'

const Authorize = ({ authorize, show }) => {

    return (
        <div className="row welcomeText">

                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <p>Please authorize your geolocation</p>
                        </div>
                        <div className="card-action">
                            <a className="waves-effect waves-light btn-large" onClick={() => authorize(true)}>Yes</a>
                            <br />
                            <br />
                            <a className="waves-effect waves-light btn-large" onClick={() => authorize(false)}>No</a>
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