import React, {Component} from 'react';

export class Navbar extends Component {

    render() {
        return (
            <nav className='navbar bg-primary'>
                <div className="brand text-white">
                    <i className='fab fa-github pr-1'> </i>
                    {this.props.title}
                </div>
            </nav>
        );
    }
}

export default Navbar;