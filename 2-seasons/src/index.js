import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [location, setLocation] = useState();
    const [error, setError] = useState('');
    
    window.navigator.geolocation.getCurrentPosition(
        position => setLocation(position),
        err => setError(err)
    );

    return (
        <div>
            <h1>Latitude: {location?location.coords.latitude:null}</h1>
            <h1>Longitude: {location?location.coords.longitude:null}</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))