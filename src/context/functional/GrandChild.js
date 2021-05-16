import LastNameContext from "./ContextAPI"
import {useContext} from 'react';
import React from 'react'


const GrandChild = () => {
    const name =  useContext(LastNameContext);

    return(     
        <h1>My Lastname is {name}</h1>
    )
}

export default GrandChild;