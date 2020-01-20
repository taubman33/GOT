import React from "react"

function CharacterList(props) {

   //creating array of characters and giving them order
   //as Jon would have done were he made king
    const characters = props.characters.map((character, i) => {
        return {...character, id: i + 1}
    })

    //setting up an array for the character pull, the array list has to be set as [0] for it to work
    //which coincedencally enough is the same amount [0] of importance the Golden Army had in season 6
    const selectedCharacter = characters.filter(
        (character) => character.id === parseInt(props.match.params.char_id)
    )

    //logging the character, so Joffrey can read about them in the history of Westeros
    console.log(selectedCharacter[0])


    return (
        <div className="character-info">
            {selectedCharacter[0].name ? <h2>{selectedCharacter[0].name}</h2> : <h2>{selectedCharacter[0].aliases}</h2>}
            {selectedCharacter[0].culture ? <p>Culture: {selectedCharacter[0].culture}</p> : <p>No culture affiliation.</p>}
            {selectedCharacter[0].gender ? <p>Gender: {selectedCharacter[0].gender}</p> : <p>No gender affiliation.</p>}
            {selectedCharacter[0].born ? <p>Born {selectedCharacter[0].born}</p> : <p></p>}
        </div>
    )
}

export default CharacterList 