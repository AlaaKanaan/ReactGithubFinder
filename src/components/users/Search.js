import React, {Component} from 'react';
import PropTypes from "prop-types";

class Search extends Component {

    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    };

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.onSubmit} className="form border-0">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={this.state.text}
                               onChange={this.onChange}
                               name="text"
                               placeholder="Search users..."
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Search</button>
                            {this.props.showClear && (
                                <button className="btn btn-danger" onClick={this.props.clearUsers}
                                        type="button">Clear</button>
                            )}

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;