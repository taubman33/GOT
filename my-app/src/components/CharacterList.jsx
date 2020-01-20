import React from "react"

function CharacterList(props) {

    // * Create a new array of character objects, each which contains an id property that holds the index value
    const characters = props.characters.map((character, i) => {
        return {...character, id: i + 1}
    })

    // * Create a variable reference for the object in the array that matches the char_id from the Route (url parameter/slug). This returns as as array with one item, so needs to be referenced as [0].
    const selectedCharacter = characters.filter(
        (character) => character.id === parseInt(props.match.params.char_id)
    )

    console.log(selectedCharacter[0])

    // * If the length of the array is 0. This syntax is the same as selectedCharacter.length == 0.
    if (!selectedCharacter.length) {
        return (
            <div className="error">
                <h1 style={{color : "red", fontSize: 100}}>404 error! </h1>
                <h4>This character does not exist in Westeros.</h4>
            </div>

        )

    }

    return (
        <div className="character-detail">
            {selectedCharacter[0].name ? <h1>{selectedCharacter[0].name}</h1> : <h2>{selectedCharacter[0].aliases}</h2>}
            {selectedCharacter[0].culture ? <p>Culture: {selectedCharacter[0].culture}</p> : <p>No culture affiliation.</p>}
            {selectedCharacter[0].gender ? <p>Gender: {selectedCharacter[0].gender}</p> : <p>No gender affiliation.</p>}
            {selectedCharacter[0].born ? <p>Born {selectedCharacter[0].born}</p> : <p></p>}
        </div>
    )
}

export default CharacterList 