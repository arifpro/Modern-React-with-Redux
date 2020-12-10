import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'This is summer now!',
        iconName: 'sun'
    },
    winter: {
        text: 'This is winter now!',
        iconName: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if (3 <= month && month <=8) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = ({ latitude }) => {
    const season = getSeason(latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className= {`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className= {`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;
