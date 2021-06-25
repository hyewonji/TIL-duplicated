import React from 'react';
import useGeolocation from "./useGeolocation";

const UseGeolocation = () => {
    const { coord: {lat,long}, error } = useGeolocation();
    return (
        <div className="Geolocation">
          <h2>useGeolocation</h2>
          <ul>
            <li>Latitude : {lat}</li>
            <li>Longitude : {long}</li>
            <li>Geolocation Error : {!error ? "null" : error}</li>
          </ul>
        </div>
    )
}

export default UseGeolocation;