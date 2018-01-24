import React from 'react';
import {FontawesomeSpinner} from '../common/FontawesomeSpinner';
import {Link} from 'react-router-dom';


export const SingleView = (props) => {

    function loadedData(){
        let keys = Object.keys(props.data)
        console.log(keys)   
        let loadedData = []; 
        for(let i = 0; i < keys.length-3; i += 1){
            //console.log(typeof props.data[keys[i]])
            if(typeof props.data[keys[i]] === 'object'){
                console.log(props.data[keys[i]])
            }else{
                loadedData.push(
                    <div key={i}>
                        <p>{keys[i]}</p>
                        <p>{props.data[keys[i]]}</p>
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