import React from "react"

//simple enough, setting up a function to list off the characters
//like calling up the contestants in a Trial by Combat
function Characters(props) {

    //setting up the props for what will be called for each
    const name = props.name
    const alias = props.alias

    const charName = () => {
        return (name) ? name : alias
    }


    //returing the characters Name and their information when clicked
    return (
        <button className='character' id={props.id} onClick={() => props.history.push(`/${props.id}`)}>
            <p>{charName()}</p>
        </button>
    )
}

export default Characters