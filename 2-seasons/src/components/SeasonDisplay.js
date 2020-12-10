import React from 'react';

const getSeason = (latitude, month) => {
    if (3 <= month && month <=8) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = ({ latitude }) => {
    const season = getSeason(latitude, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Let\'s hit the beach';
    
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default SeasonDisplay;
