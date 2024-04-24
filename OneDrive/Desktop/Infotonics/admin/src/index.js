import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/scss/sb-admin-2.scss';

import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.render(
<Provider store={Store}>
    <App /> 
</Provider> , document.getElementById('root'));