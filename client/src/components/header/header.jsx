import React from 'react';
import './header.css';
import {Link} from '@reach/router';

const Header = ({page}) => {

    const fetchMsg = (page) => {
        switch(page) {
            case 'home':
                return <Link to="/pets/new"><p>add a pet to the shelter</p></Link>
            default:
                return <Link to="/"><p>back to home</p></Link>        }
    }

    return(
        <header>
            <h1>Pet Shelter</h1>
            {page && fetchMsg(page)}
        </header>
    )
}

export default Header;