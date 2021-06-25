import React, { useState, useEffect } from 'react';

const useOnline = () => {
    const [isOnline,setIsOnline] = useState(navigator.onLine)

    const handle = () => {
        setIsOnline(navigator.onLine)
    }

    useEffect(() => {
        window.addEventListener("online",handle);
        window.addEventListener("offline",handle);
        return () => {
            window.removeEventListener("online", handle);
            window.removeEventListener("offline", handle);
        }
    },[])

    return { isOnline }
}

export default useOnline;