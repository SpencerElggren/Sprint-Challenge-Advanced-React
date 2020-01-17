import React from 'react';

const CardInfo = props => {
    return (

        <div className={'card'}>
            <h2>{props.name}</h2>
            <h3>{props.country}</h3>
            <p>{props.searches}</p>
        </div>

    )
};

export default CardInfo