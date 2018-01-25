import React from 'react';
import {Link} from 'react-router-dom';



export default class Header extends React.Component{
    render(){
        return(
            <div className='menu' id='top-nav'>
                <ul className='nav-links'>
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
                    <Link to='/category/starships'>
                        <li>
                            Starships
                        </li>
                    </Link>
                    <Link to='/category/species'>
                        <li>
                            Species
                        </li>
                    </Link>
                    <Link to='/category/planets'>
                        <li>
                            Planets
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}