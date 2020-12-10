import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

const App = () => {
    const [latitude, setLatitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLatitude(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []);

    return (
        <div>
            
            {
                errorMessage && !latitude ?
                    <h1>Error: {errorMessage}</h1>
                : !errorMessage && latitude ?
                    <SeasonDisplay latitude={latitude} />
                :
                    <h1>Loading...</h1>
            }
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))