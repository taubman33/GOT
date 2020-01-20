import React from 'react'

const Characters = (props) => {
    console.log(props.match.params.character_index)
    //here we are setting up the character and matching the parameters + the slug
    const charIndex = props.match.params.character_index

    return(
        // putting in these 3 for now but can add more once it gets working
        //the && statements are annoying but people on StackOverflow are nice

    
        <div>
            <h1 className='Name'>
                {
                    (props.characters[charIndex] && props.characters[charIndex].name) ? 
                    (props.characters[charIndex] && props.characters[charIndex].name) : 
                    (props.characters[charIndex] && props.characters[charIndex].aliases[0])
                }
            </h1>
            <h3 className='Titles'>
                Titles: {
                    (props.characters[charIndex] && props.characters[charIndex].titles.join(', ')) ? 
                    (props.characters[charIndex] && props.characters[charIndex].titles.join(', ')) : 
                    'It is not known'
                }
            </h3>
            <h3 className='Aliases'>
                Aliases: {
                    (props.characters[charIndex] && props.characters[charIndex].aliases.join(', ')) ?
                    (props.characters[charIndex] && props.characters[charIndex].aliases.join(', ')) : 
                    'It is not known'
                }
            </h3>

        </div>
    )
}

export default Characters