import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href='/'>
                <i className={props.icon}> </i>
                <span className='text-react-color'>
                        {props.title}
                    </span>
            </a>
        </nav>
    );

};

Navbar.defaultProps = {
    title: 'Github Finder ReactJs Demo',
    icon: 'fab fa-2x fa-github d-inline-block align-middle text-react-color pr-2'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;