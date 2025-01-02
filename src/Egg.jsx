import React from 'react'
import Halfboil from './Halfboil'
const Egg = ({name}) => {
    return (
        <>
        <h1>Egg {name}

        </h1>
        <Halfboil name={name}/>
        </>
    )
}
export default Egg                          