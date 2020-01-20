import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterIndex from './components/CharacterIndex';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';
import { Route, Link, Switch } from 'react-router-dom';

//setting up the foundation, the URL -> the merging of the crown and the faith
const URL = 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50'

//valar functionalis

function App() {

  //the array for our characters
  const [characters, setCharacters] = useState([])
 
  //basic fetchdata function here. our characters are the data pulling from
  //like the unsullied bringing in new intiates
  //except we aren't castrating the data
  const fetchData = async () => { 
    try {
      let response = await axios.get(URL)
      setCharacters(response.data)

    //basic catch
    } catch (err) {
      console.log(`Seven Hells! You've made an error ${err}!`)
      console.log(err.response)
    }

  }


  //setting up the different ways the data will run after being fetched
 useEffect(() => {
    fetchData();
  }, [])


  //we need the ! there so no empty strings can come up
  if (!characters.length) {
    return (
      <div className="App">
        <h1>Game of Thrones</h1>
      </div>
    )
  } 

    //our main return here, with navbar links to get around
    return (
      <div className="App">
        <nav>
          <Link exact='true' activeclassname='active' to='/'>
            Home
          </Link>
        </nav>
        <main>
      
          <h1>Game of Thrones Characters</h1>
          <Switch>
            <Route exact path='/' component={(props) => {return <CharacterIndex {...props} characters={characters} />}} />
            <Route exact path='/:char_id' component={(props) => {return <CharacterList {...props} characters={characters} />}} />
          </Switch>
        </main>
      </div>
    );

}

export default App