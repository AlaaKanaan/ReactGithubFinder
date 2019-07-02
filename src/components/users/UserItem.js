import React, {Component} from 'react';

class UserItem extends Component {
    state = {
        id: 1,
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
    };

    render() {
        const {login, avatar_url, html_url} = this.state;
        return (
            <div className="card" style={{width: '15em'}}>
                <img className="card-img-top" src={avatar_url} alt={login}/>
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <a href={html_url} target="_blank" rel="noopener noreferrer"
                       className="card-link btn btn-primary">Profile</a>
                </div>
            </div>
        );
    }
}

export default UserItem;