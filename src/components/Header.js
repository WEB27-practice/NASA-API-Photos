import React from "react";


const Header = () => {

    return(
        <div className='photo-header'>
            <p className='photo-title'>NASA Photo of the Day</p>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='link'><a href="#">Home</a></li>
                    <li className='link'><a href="#">Services</a></li>
                    <li className='link'><a href="#">About</a></li>
                    <li className='link'><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;