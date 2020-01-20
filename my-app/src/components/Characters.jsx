import React from 'react'

function Character(props) {

const name = props.name
const alias = props.alias


const checkName = () => {
    return (name) ? name : alias 

}

}
    

export default Characters