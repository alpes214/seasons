import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());

    console.log(props.lat, new Date().getMonth(), season)
    return(
        <div><h1>{season === 'summer' ? 'Lets hit the beach' : 'Burr, it is chilly'}</h1></div>
    );
};

export default SeasonDisplay;
