import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var app = (
    <div>
        <App title = "Machine learning" article = "19"/>
        <App title = "Data Science" article = "11"/>
        <App title = "DS-Algo" article = "19"/>
        <App title = "Machine learning" article = "19"/>
        <App title = "Data Science" article = "11"/>
        <App title = "DS-Algo" article = "19"/>
        <App title = "Machine learning" article = "19"/>
        <App title = "Data Science" article = "11"/>
        <App title = "DS-Algo" article = "19"/>
    </div>

);

ReactDOM.render(app , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
