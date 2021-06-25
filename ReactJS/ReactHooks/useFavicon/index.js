import React from 'react';
import useFavicon from './useFavicon';

const UseFavicon = () => {
    const setFavicon = useFavicon("https://nomadcoders.co/m.png");
    return (
        <div className="Favicon">
            <h2>useFavicon</h2>
            <button onClick={setFavicon}>Change Favicon</button>
        </div>
    )
}

export default UseFavicon;