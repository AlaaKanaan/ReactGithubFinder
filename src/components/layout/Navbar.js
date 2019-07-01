import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {

    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github pr-1'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className='navbar bg-dark'>
                <div className="brand text-white">
                    <i className={this.props.icon}> </i>
                    {this.props.title}
                </div>
            </nav>
        );
    }
}

export default Navbar;