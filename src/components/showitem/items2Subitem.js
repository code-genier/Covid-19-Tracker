import React from "react";
import "./items2Subitem.css";
export default function items2Subitem(props) {
  console.log(props[0]);
  return (
    <div>
      <div className="container_child">
        <span className="state">{props.state}</span> :  
        <span className="confirmed"> Confirmed : </span> {props.confirmed} | 
         <span className="active"> Active : </span> {props.active} | 
        <span className="recovered"> Recovered : </span>{props.recovered} | 
        <span className="death"> Death : </span> {props.deaths}
      </div>
    </div>
  );
}
