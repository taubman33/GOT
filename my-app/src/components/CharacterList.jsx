import React from 'react';
import Characters from "./Characters"

function CharacterList(props) {
    console.log(props)

//making array of characters with id = to index +1
//like the Night King raising his dead army after the seige of Hardhome
        const list = props.characters.map((character, i) => {
            return {...character, id: i + 1}
        })

        //setting up the div return to bring characters in
        return (
            <div className = 'character-index'>
                {list.map((character) => {
                    return (
                        <Character
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



export default CharacterList