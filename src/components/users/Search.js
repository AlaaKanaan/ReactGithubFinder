import React, {Component} from 'react';

class Search extends Component {

    state = {
        text: ''
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text);
    };

    render() {
        return (
            <div className="form-group">
                <form onSubmit={this.onSubmit} className="form border-0">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={this.state.text}
                               onChange={this.onChange}
                               name="text"
                               placeholder="Search users..."
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;