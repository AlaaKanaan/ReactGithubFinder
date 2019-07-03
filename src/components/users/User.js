import React, {Fragment, useEffect, useContext} from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom'
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";


const User = ({match}) => {

    const githubContext = useContext(GithubContext);

    const {getUser, loading, user, repos, getUserRepos} = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);


    const {
        login,
        avatar_url,
        html_url,
        name,
        bio,
        location
    } = user;


    if (loading) {
        return <Spinner/>
    }

    return (
        <Fragment>
            <Link to='/' className='btn btn-sm btn-secondary'>Back to search</Link>

            <div className="card mt-2">
                <div className="card-header">
                    Github Profile
                </div>
                <div className="card-body">
                    <div className='text-center'>
                        <img className="rounded-circle pr-3 mb-2" width='200' src={avatar_url} alt={login}/>
                        <h5>{name}</h5>
                        <p className='small'>{location}</p>

                        {bio && <Fragment>
                            <p className="card-text w-50 m-auto">
                                {bio}
                            </p>
                        </Fragment>}

                        <a href={html_url} target="_blank" rel="noopener noreferrer"
                           className="btn btn-sm btn-dark mt-3">Github Profile</a>
                    </div>
                </div>
            </div>

            <Repos repos={repos}/>


        </Fragment>
    );
};
export default User;