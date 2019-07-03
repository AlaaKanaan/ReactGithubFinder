import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


const UserItem = ({user: {login, avatar_url, html_url}}) => {
    return (
        <div className="card m-2" style={{width: '13em'}}>
            <img className="card-img-top" src={avatar_url} alt={login}/>
            <div className="card-body m-auto text-center">
                <h5 className="card-title">{login}</h5>
                <Link to={`/user/${login}`}
                      className="card-link btn btn-sm btn-primary">More</Link>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;