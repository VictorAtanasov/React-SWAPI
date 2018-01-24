import React from 'react';
import {Link} from 'react-router-dom';



export default class Header extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <Link to='/'>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to='/category/vehicles'>
                        <li>
                            Vehicles
                        </li>
                    </Link>
                    <Link to='/category/films'>
                        <li>
                            Films
                        </li>
                    </Link>
                    <Link to='/category/people'>
                        <li>
                            People
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}