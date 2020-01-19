//bringing all of the important things in, like Dany bringing the Dothraki across the sea

import React, { useState, useEffect } from 'react'
import './App.css';
// import axios from 'axios';


// //linking the API
const url = 'https://www.anapioficeandfire.com/' 

//I guess we are keeping this functional for now? and the other will be class based?
function App() {
  
  // const [characters, listCharacters] = useState([])  
 
  // //our fetch data app, working with async. I am finally feeling decent about the usage of the fat arrow
  // const fetchData = async () => {
  // try {
  //   let response = await axios.get(URL)
  //   listCharacters(response.data)
  // } catch (err) {
  //   console.log(`Seven Hells! We have an error at ${err}!`)
  // }

  // }
  
  // //setting up the fetchData function to go 
  // useEffect(() =>{
  //   fetchData();

  // }, [])



  return (
    <div className="App">
      <h1> Game of Thrones API</h1>

    </div>
  );
  }
  export default App;
