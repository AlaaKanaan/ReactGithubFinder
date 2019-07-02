import React, {Component} from 'react';

class UserItem extends Component {


    render() {
        const {login, avatar_url, html_url} = this.props.user;
        return (
            <div className="card m-2" style={{width: '12em'}}>
                <img className="card-img-top" src={avatar_url} alt={login}/>
                <div className="card-body m-auto text-center">
                    <h5 className="card-title">{login}</h5>
                    <a href={html_url} target="_blank" rel="noopener noreferrer"
                       className="card-link btn btn-primary">More</a>
                </div>
            </div>
        );
    }
}

export default UserItem;