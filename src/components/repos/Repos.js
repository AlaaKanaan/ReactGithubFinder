import React from 'react';
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const Repos = ({repos}) => {

    return (
        <div className="card mt-2">
            <div className="card-header">
                Github Repos
            </div>
            <div className="card-body">
                {repos.map(repo => (
                    <RepoItem repo={repo} key={repo.id}/>
                ))}
            </div>
        </div>
    );

};

Repos.prototype = {
    repos: PropTypes.array.isRequired
};

export default Repos;