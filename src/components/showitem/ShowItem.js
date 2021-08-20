import React from 'react'
import Item1 from './items1';
import Item2 from './items2';

export default function ShowItem(props) {
    const dte=(props.stateData.total_values.lastupdatedtime);
    
    return (
        <div>
           <Item1 date={dte} confirmed={props.stateData.total_values.confirmed} 
           NewDeaths={props.stateData.total_values.deaths} Recovered={props.stateData.total_values.recovered} active={props.stateData.total_values.active}/>
           <Item2  stateData1={props.stateData}  />
           
    
        </div>
    )
}
