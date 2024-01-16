import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className='navbar'>
                <p>Knowledge Cafe</p>
                <img src={'/profile.png'} />
            </div>
            <div className='hr'></div>
        </nav>

    );
};

export default Header;