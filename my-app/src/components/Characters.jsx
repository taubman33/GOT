import React from "react"

function Characters(props) {

    const name = props.name
    const alias = props.alias

    const checkName = () => {
        return (name) ? name : alias
    }

    return (
        <button className='character' id={props.id} onClick={() => props.history.push(`/${props.id}`)}>
            <p>{checkName()}</p>
        </button>
    )
}

export default Characters