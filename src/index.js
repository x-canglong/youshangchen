import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from '@/store/index';
import {
    changeIsLogin,
    setCarCount
} from '@/store/Action';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
