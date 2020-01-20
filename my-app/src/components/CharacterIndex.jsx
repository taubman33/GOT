import React from "react"
import Characters from "./Characters"

function CharacterIndex(props) {
    console.log(props)

    // Creating a new array of characters with an id = to index + 1
    const list = props.characters.map((character, i) => {
        return {...character, id: i + 1}
    })

    return (
        <div className='character-index'>
            {list.map((character) => {
               return (
                    <Characters 
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        alias={character.aliases[0]} 
                        character={character}
                        history={props.history}
                    />)
            })}
        </div>
    )
}

export default CharacterIndex