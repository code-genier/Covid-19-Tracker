import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import ShowItem1 from "./components/showitem/ShowItem";
import Footer from "./components/showitem/footer";
import Async from 'react-async';
import './app.css';

const loadUsers = () =>
fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "914d93d8c3msh22c6ecae9b31dfdp160f86jsn251ebf7fb282",
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
	}
})
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())


function App() {

  return (
    <div>
      <Async promiseFn={loadUsers}>
      {({ data, err, isLoading }) => {
        if (isLoading) return (<div className="loading"></div>);
        if (err) return `Something went wrong: ${err.message}`
        if (data)
        return (
         <div>
            <NavBar />
            <ShowItem1  stateData={data} />
            <Footer />
         </div>
        )
        }}
      </Async>
    </div>
  );
}

export default App;
