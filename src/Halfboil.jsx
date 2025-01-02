import React from 'react'
import Stomatch from './Stomatch'
const Halfboil = ({name}) => {
    return (
        <>
        <h1>Halfboil{name}</h1>
        <Stomatch name={name}/>
        </>
    )
}
export default Halfboil