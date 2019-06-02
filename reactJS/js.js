import React from "react";
import ReactDOM from "react-dom";
import "style.css";


function Person() {
	
	return (
			<div className="item">
        		<h3>ReactJS</h3>
        		<p>Total Articles : 40</p>
        	</div>
        );
}

ReactDOM.render(<Person/>, document.querySelector("#p1"));
