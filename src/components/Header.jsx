import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className="container headerContainer">
            <div className="title">WHICH BREED IS YOUR DOG?</div>
            <Link to="#secondSection" >
                <div className="down-btn">
                    <img src="/up-chevron.svg" alt="" />
                </div>
            </Link>
        </div>
    );
}

export default Header;
