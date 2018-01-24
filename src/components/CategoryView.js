import React from 'react';
import {FontawesomeSpinner} from '../common/FontawesomeSpinner';
import {Link} from 'react-router-dom';


export const CategoryView = (props) => {


    function loadedData(){
        if(!props.fetched){
            return <FontawesomeSpinner />
        } else {
            return props.data.map((el, i) => {
                let elementId = el.url.match(/\d+/)[0];
                if(el.name){
                    return  <Link 
                                to={`/category/${props.category}/${elementId}`}
                                key={i} >
                                <p>
                                    {el.name}
                                </p>
                            </Link>
                } else{
                    return  <Link 
                                to={`/category/${props.category}/${elementId}`}
                                key={i} >
                                <p>
                                    {el.title}
                                </p>
                            </Link>
                }
            })
        }
    }

    

    return(
        <div>
            <h2>
                {props.category}
            </h2>
            {loadedData()}
        </div>
    )
}