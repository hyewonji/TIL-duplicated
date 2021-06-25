import React, { useState, useEffect } from 'react';

const useKeyPress = (alpha) => {
    const [state,setState] = useState({
        key: alpha,
        bool: false
    });

    const keyConfirm = (e) => {
        const key = e.key
        if(key === state.key){
            setState({ bool: true })
            window.setTimeout(()=> {setState({ bool: false })},50)
        } else {
            setState({ bool: false })
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", keyConfirm)
        return () => window.removeEventListener("keydown", keyConfirm)
    },[]) 
    return state.bool
}

export default useKeyPress