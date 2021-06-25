import React, { useState, useEffect } from 'react';

const useGeolocation = () => {
    const [state, setState] = useState({
        coord : {lat : null, long : null},
        error : null
    })

    useEffect(() => {
        try{
            const watchID = navigator.geolocation.getCurrentPosition((position) => {
                setState({
                    coord: {lat : position.coords.latitude,
                            long: position.coords.longitude}
                })
            })
            console.log(state)
        } catch(e) {
            setState({ error: "error" })
            
        }
    },[])
    return  { ...state }
}

export default useGeolocation
