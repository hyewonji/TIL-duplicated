import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
    const [ state, setState ] = useState({
        x: null,
        y: null
    })
    
    const handleMouse = (event) => {
        setState({ 
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        document.addEventListener("mousemove",handleMouse);
        return () => document.removeEventListener("mousemove",handleMouse);
    },[])

    return { ...state }
}

export default useMousePosition;