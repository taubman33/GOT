import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterIndex from './components/CharacterIndex';
import Characters from './components/Characters';
import CharacterList from './components/CharacterList';
import { Route, Link, Switch } from 'react-router-dom';

//setting up the foundation, the URL -> the merging of the crown and the faith
const URL = 'https://www.anapioficeandfire.com/api/characters?page=12&pageSize=70'

//valar functionalis

function App() {

  //the array for our characters
  //a nice layout to hold our characters in
  //like the inside of the House of Black and White
  const [characters, setCharacters] = useState([])
 
  //basic fetchdata function here. our characters are the data pulling from
  //like the unsullied bringing in new intiates
  //except we aren't castrating the data
  const fetchData = async () => { 
    try {
      let response = await axios.get(URL)
      setCharacters(response.data)

    //basic catch
    //if it gets bad, we set spark the wildfire logged under the castle
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
  //like the writers needed a good ending but nothing came up
  if (!characters.length) {
    return (
      <div className="App">
        <h1>Game of Thrones</h1>
      </div>
    )
  } 

    //our main return here, with navbar links to get around
    //faster than Gendry north of the wall

    return (
      <div className="App">

        <main>
         <div className = "siteTitle">
          <h1>A Who's Who of Westeros</h1>
          <Switch>
            <Route exact path='/' component={(props) => {return <CharacterIndex {...props} characters={characters} />}} />
            <Route exact path='/:char_id' component={(props) => {return <CharacterList {...props} characters={characters} />}} />
          </Switch>
          </div>

        </main>
       <br></br>
       <footer>
        <div className ="Home">
          <nav>
          <Link exact='true' activeclassname='active' to='/'>
          Back home!
          {/* <img src="./components/TargSig.jpg" alt="Home"></img> */}
          </Link>
        </nav>
        </div>
        </footer>

      </div>
    );

}

export default App