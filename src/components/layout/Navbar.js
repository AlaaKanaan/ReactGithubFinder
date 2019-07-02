import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {

    static defaultProps = {
        title: 'Github Finder ReactJs Demo',
        icon: 'fab fa-2x fa-github d-inline-block align-middle text-react-color pr-2'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };


    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href='/'>
                    <i className={this.props.icon}> </i>
                    <span className='text-react-color'>
                        {this.props.title}
                    </span>
                </a>
            </nav>
        );
    }
}

export default Navbar;