import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href='/'>
                <i className={icon}> </i>
                <span className='text-react-color small'>
                        {title}
                </span>
            </a>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className='nav-link text-white'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className='nav-link text-white'>About</Link>
                </li>
            </ul>
        </nav>
    );

};

Navbar.defaultProps = {
    title: 'Github Finder ReactJs Demo',
    icon: 'fab fa-1x fa-github d-inline-block align-middle text-react-color pr-2'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;