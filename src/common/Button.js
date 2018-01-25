import React from 'react';

export const Button = (props) =>{

    return(
        <div className="btn" onClick={props.onClick}>
            <span>Load More</span>
        </div>
    )

}

