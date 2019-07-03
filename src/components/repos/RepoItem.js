import React from 'react';
import PropTypes from "prop-types";

const RepoItem = ({repo}) => {

    return (
        <ul className="list-group">
            <a className='list-group-item list-group-item-action mb-2' target='_blank' href={repo.html_url}
               rel="noopener noreferrer">{repo.name}</a>


        </ul>
    );

};

RepoItem.prototype = {
    repo: PropTypes.object.isRequired
};

export default RepoItem;