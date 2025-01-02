import React from 'react'
import Egg from './Egg'
const Hen = ({name}) => {
    return (
        <>
        <h1>Hen {name}</h1>
        <Egg name={name}/>
        </>
    )
}
export default Hen