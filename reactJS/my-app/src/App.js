import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';

import Person from './Person/Person.js'

class App extends Component{
      state = {
            name : ["Abdul", "Waheed", "Mac", "Robert"]
      }
      constructor(params) {
            super()
            this.props = params
      }

      switchNameHandler = () =>{
            alert("Buttong Cicked")
      }

      render(){
            return (
                 <div>
                        <Person name = {this.state.name[0]}/>
                        <div className="item">
                              <h3>{this.props.title}</h3>
                              <p>Total Articles : {this.props.article}</p>
                              <button onClick = {this.switchNameHandler}>Switch</button>
                        </div>
                        <Person name = {this.state.name[1]}/>
                        <div className="item">
                              <h3>{this.props.title}</h3>
                              <p>Total Articles : {this.props.article}</p>
                              <button onClick = {this.switchNameHandler}>Switch</button>
                        </div>
                        <Person name = {this.state.name[2]} click = {this.switchNameHandler}/>
                 </div>
                  
            ); 
      };
}

export default App;
