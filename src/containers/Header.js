import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';


export default class Header extends React.Component{

    mobMenu(){
        var sideNav = document.querySelector('.sidenav');
        if(sideNav.offsetWidth !== 0){
            sideNav.style.width = '0'
        } else {
            sideNav.style.width = '250px'
        }
    }

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
                <div className="mobile-menu">
                    <FontAwesome
                        className='burger'
                        name='bars'
                        size='2x'
                        onClick={this.mobMenu}
                    />
                </div>
                <div className='sidenav'>
                    <div className="mobile-menu">
                        <FontAwesome
                            className='closebtn'
                            name='times'
                            size='2x'
                            onClick={this.mobMenu}
                        />
                    </div>
                    <ul onClick={this.mobMenu}>
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
            </div>
        )
    }
}