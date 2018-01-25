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
                    return(
                        <li key={i}>
                            <Link 
                                to={`/category/${props.category}/${elementId}`}>
                                <p>
                                    {el.name}
                                </p>
                            </Link>
                        </li>
                    )
                } else{
                    return(
                        <li key={i}>
                            <Link 
                                to={`/category/${props.category}/${elementId}`}>
                                <p>
                                    {el.title}
                                </p>
                            </Link>
                        </li>
                    )
                }
            })
        }
    }

    

    return(
        <div>
            <div className="category-stars-box"></div>
            <div className="heading">
                <h2>
                    {props.category}    
                </h2>
                <div className="border"></div>          
            </div>
            <div className="links-wrapper">
                <ul>
                    {loadedData()}
                </ul>
            </div>
        </div> 
    )
}