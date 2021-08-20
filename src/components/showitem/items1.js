import React from "react";
import "./items.css";

export default function items(props) {
  return (
    <div id="center">
      <div id="master_div">
        <div className="item1">
         Last Updated at 
          <br/>
          <span className='span0'>{props.date}</span>
        </div>
        <div className="item2">
          Confirmed
          <br />
          <span className="span1">{props.confirmed}</span>
        </div>
        <div className="item3">
         Death 
          <br />
          <span className="span2">{props.NewDeaths}</span>
        </div>
        <div className="item4">
         Recovered 
          <br />
          <span className="span3">{props.Recovered}</span>
        </div>
        <div className="item5">
        Active
          <br />
          <span className="span4">{props.active}</span>
        </div>
      </div>
    </div>
  );
}
