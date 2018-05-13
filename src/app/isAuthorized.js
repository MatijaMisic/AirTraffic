
import React, { Component } from 'react';
import Authorize from './Authorize/Authorize';
import App from '../app/App'

const isAuthorized = () => {
    return class authenticate extends Component {

        toDispay = () => {
            const key = localStorage.getItem('authorized') ? true : false;    
            return key ? <App /> : <Authorize />
        }

        render () {
            return this.toDispay();
        }
    }
            
};

export default isAuthorized;