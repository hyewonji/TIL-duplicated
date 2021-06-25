import React from 'react';
import useMousePosition from "./useMousePosition";

const UseMousePosition = () => {
    const { x, y } = useMousePosition();
    return(
        <div className="MousePoint">
            <h2>useMousePoint</h2>
            <ul>
                <li>Mouse X: { x }</li>
                <li>Mouse Y: { y }</li>
            </ul>
        </div>
    )
}

export default UseMousePosition;