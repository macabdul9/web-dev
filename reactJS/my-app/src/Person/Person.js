import React from 'react';

const person = (props) => {
    return (
        <div className = "item">
            <h3>Name : {props.name}</h3>
            <p>Age : {Math.floor(Math.random()*30)}</p>
            <button onClick = {props.onClick}>Switch</button>
        </div>

    );
}

export default person