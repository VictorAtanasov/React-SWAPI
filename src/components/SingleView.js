import React from 'react';
import {Link} from 'react-router-dom';


export const SingleView = (props) => {

    function extractData(arr, title){
        if(title === 'residents'){
            title = 'resident'
        } else if(title === 'characters'){
            title = 'character'
        } else if(title === 'pilots'){
            title = 'pilot'
        }
        let counter = 0;
        let nestedData = [];
        for(let y of arr){
            nestedData.push(
                <p key={counter += 1}>
                    {title + ' ' + y.match(/\d+/)[0]}
                </p>
            )
        }
        return nestedData
    }

    function loadedData(){
        let keys = Object.keys(props.data);
        let loadedData = [];
        for(let i = 0; i < keys.length-3; i += 1){
            if(typeof props.data[keys[i]] === 'object'){
                loadedData.push(
                    <div key={i}>
                        <p>{keys[i]}</p>
                        {extractData(props.data[keys[i]], keys[i])}
                        <div className="detail-border"></div>
                    </div>
                );
            }else{
                loadedData.push(
                    <div key={i}>
                        <p>{keys[i]}</p>
                        <p>{props.data[keys[i]]}</p>
                        <div className="detail-border"></div>
                    </div>
                )
            }
        }
        return loadedData
    }

    

    return(
        <div>
            <ul>
                {loadedData()}
            </ul>
        </div>
    )
}