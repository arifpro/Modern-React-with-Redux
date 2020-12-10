import React from 'react';

const SeasonDisplay = ({ lat, long }) => {
    return (
        <div>
            <h1>Season Display!</h1>
            <div>
                <h1>Latitude: {lat}</h1>
                <h1>Longitude: {long}</h1>
            </div>
        </div>
    )
}

export default SeasonDisplay;
