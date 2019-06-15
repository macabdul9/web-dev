import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
      return (
          <div className="item">
                <h3>{props.title}</h3>
                <p>Total Articles : {props.article}</p>
              </div>
      );
}

export default App;
