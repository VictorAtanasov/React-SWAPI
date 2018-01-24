import FontAwesome from 'react-fontawesome';
import React from 'react';

export const FontawesomeSpinner = (props) => {
    return(
        <FontAwesome
            name='spinner'
            className='spinner'
            size='5x'
            spin
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
    )
}