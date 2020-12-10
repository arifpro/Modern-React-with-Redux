import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [location, setLocation] = useState({
        lat: null,
        long: null
    });
    const [errorMessage, setErrorMessage] = useState('');

    window.navigator.geolocation.getCurrentPosition(
        position => setLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude
        }),
        err => setErrorMessage(err.message)
    );

    return (
        <div>
            
            {
                errorMessage && !location.lat ?
                    <h1>Error: {errorMessage}</h1>
                : !errorMessage && location.lat ?
                    <div>
                        <h1>Latitude: {location.lat}</h1>
                        <h1>Longitude: {location.long}</h1>
                    </div>
                :
                    <h1>Loading...</h1>
            }
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))