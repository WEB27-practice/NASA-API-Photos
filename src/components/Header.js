import React from "react";

import { Link } from "react-router-dom";

const Header = () => {

    return(
        <div className='photo-header'>
            <p className='photo-title'>NASA Photo of the Day</p>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='link'><Link to="/">Home</Link></li>
                    <li className='link'><a href="https://www.nasa.gov/" target="_blank">NASA</a></li>
                    <li className='link'><a href="https://api.nasa.gov/" target="_blank">NASA API Key</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;