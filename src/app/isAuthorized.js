
import React, { Component } from 'react';
import Authorize from './Authorize/Authorize';
import App from '../app/App'

const isAuthorized = () => {
    return class authenticate extends Component {

        toDispay = () => {
            console.log(localStorage.getItem('authorized'));
            
            const key = localStorage.getItem('authorized') ? true : false;
            console.log(key);
            
            return key ? <App /> : <Authorize />
        }
        render () {
            return this.toDispay();
        }
    }
        
    
    
};

export default isAuthorized;