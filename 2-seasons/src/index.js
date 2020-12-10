import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

const App = () => {
    const [location, setLocation] = useState({
        lat: null,
        long: null
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLocation({
                lat: position.coords.latitude,
                long: position.coords.longitude
            }),
            err => setErrorMessage(err.message)
        );
    });

    return (
        <div>
            
            {
                errorMessage && !location.lat ?
                    <h1>Error: {errorMessage}</h1>
                : !errorMessage && location.lat ?
                    <SeasonDisplay lat={location.lat} long={location.long} />
                :
                    <h1>Loading...</h1>
            }
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))