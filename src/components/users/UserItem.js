import React from 'react';
import PropTypes from 'prop-types';


const UserItem = ({user: {login, avatar_url, html_url}}) => {
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
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;