import React from 'react';
import useLocalStorage from "./useLocalStorage";

const UseLocalStorage = () => {
    const { currentLS, setLS } = useLocalStorage("HYEWON","12345");
    return(
        <div className="LocalStorage">
            <h2>useLocalStorage</h2>
            <ul>
                <li>Current Value: { currentLS }</li>
                <button onClick={() => setLS("12345")}>Set value: 12345</button>
                <button onClick={() => setLS(null)}>Clear LS</button>
            </ul>
        </div>
    )
}

export default UseLocalStorage;
        