//bringing all of the important things in, like Dany bringing the Dothraki across the sea

import React, { useState, useEffect } from 'react';
import './App.css';
// import CharacterList from '.components/CharacterList';
// import Characters from '.components/Characters';
// import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';

// //linking the API
const url = 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50'


//setting up the App function
function App() {
  
  //initalizing states here
  const [Characters, CharacterList]= useState([])  
 
  //our fetch data app, working with async. I am finally feeling decent about the usage of the fat arrow
  const fetchData = async () => {
  try {
    let response = await axios.get(URL)
    CharacterList(response.data)
  } catch (err) {
    console.log(`Seven Hells! We have an error at ${err}!`)
  }
}
  
  //setting up the fetchData function to go 
  useEffect(() =>{
    fetchData();

  }, [])

  //this prevents undefined strings from loadin up and messing everything up
  //like D&D did to season 8
  if (!characters.length) {
    return (
      <div className="App">
        <h1>Game of Thrones API Project</h1>
       </div>
       )
    } 
  return (

      <div className="App">
        <nav>
          <Link exact='true' activeclassname='active' to='/'>
            Home
          </Link>
        </nav>
        <main>
          <h1>Ours is the Fury!</h1>
          <Switch>
            <Route exact path='/' component={(props) => {return <CharacterList {...props} characters={characters} />}} />
            <Route exact path='/:char_id' component={(props) => {return <Characters {...props} characters={characters} />}} />
          </Switch>
        </main>
      </div>
    )
  }


  export default App;
