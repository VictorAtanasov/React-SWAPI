import React from 'react';
import {Link} from 'react-router-dom';


export const SingleView = (props) => {
    function loadedData(){
        let keys = Object.keys(props.data);
        let loadedData = [];
        for(let i = 0; i < keys.length-3; i += 1){
            if(typeof props.data[keys[i]] === 'object'){
                loadedData.push(
                    <div key={i}>
                        <strong>
                            <p>{keys[i]}</p>
                        </strong>
                        {extractData(props.data[keys[i]], keys[i])}
                        <div className="detail-border"></div>
                    </div>
                );
            } else if(keys[i] === 'homeworld'){
                loadedData.push(
                    <div key={i}>
                        <strong>
                            <p>{keys[i]}</p>
                        </strong>
                        <Link to={`/category/planets/${props.data[keys[i]].match(/\d+/)[0]}`}>
                            {keys[i]}
                        </Link>
                        <div className="detail-border"></div>
                    </div>
                )
             } else if(keys[i] === 'title' || keys[i] === 'name'){
             } else{
                let dataTitle = keys[i].replace(/_/g, ' ');
                loadedData.push(
                    <div key={i}>
                        <strong>
                            <p>{dataTitle}</p>
                        </strong>
                        <p>{props.data[keys[i]]}</p>
                        <div className="detail-border"></div>
                    </div>
                )
              }
        }
        return loadedData
    }


    function extractData(arr, title){
        var linkValue = `/category/${title}/`;
        if(title === 'residents' || title === 'characters' || title === 'pilots'){
            title = title.replace(/.$/,'');
            linkValue = '/category/people/';
        } 
        let counter = 0;
        let nestedData = [];
        for(let y of arr){
            let linkNumber = y.match(/\d+/)[0];
            nestedData.push(
                <p key={counter += 1}>
                    <Link to={`${linkValue}${linkNumber}`}>
                        {`${title} ${linkNumber}`}
                    </Link>
                </p>
            )
        }
        return nestedData
    }

    return(
        <div>
            <div className="heading">
                <h2>
                    {props.data.name ? props.data.name : props.data.title}
                </h2>      
            </div>
            <div className="detail-links">
                {loadedData()}
            </div>
        </div>
    )
}