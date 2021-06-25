import React, { useState, useEffect } from 'react';

const useLocalStorage = (name, initialValue) => {
    const [currentLS, setLS] = useState(initialValue)

    useEffect(() => {
        localStorage.setItem(name,currentLS)
    },[currentLS])

    return { currentLS, setLS }
}

export default useLocalStorage;