import React from 'react';
import useOnline from "./useOnline"

const UseOnline = () => {
    const { isOnline } = useOnline();
    return (
        <div className="Online">
            <h2>useOnline</h2>
            <div>Are you online? { isOnline ? "yes" : "no" }</div>
        </div>
    )
}

export default UseOnline;