import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'

import './index.css';
import 'materialize-css/dist/css/materialize.min.css'

import registerServiceWorker from './registerServiceWorker';
import isAuthorized from './app/isAuthorized';

ReactDOM.render(
    <HashRouter>
        <Route path='/' component={isAuthorized()}/>
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
