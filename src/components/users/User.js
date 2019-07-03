import React, {Fragment, Component} from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
    };

    render() {
        const {
            login,
            id,
            node_id,
            avatar_url,
            gravatar_id,
            url,
            html_url,
            followers_url,
            following_url,
            gists_url,
            starred_url,
            subscriptions_url,
            organizations_url,
            repos_url,
            events_url,
            received_events_url,
            type,
            site_admin,
            name,
            bio,
            company,
            blog,
            location,
            email,
            hireable,
            bion,
            public_repos,
            public_gists,
            followers,
            following,
            created_at,
            updated_at
        } = this.props.user;

        const {loading} = this.props;

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
                            <p className="card-text">
                                {bio && <Fragment>
                                    {bio}
                                </Fragment>}
                            </p>
                            <a href={html_url} target="_blank" className="btn btn-sm btn-dark">Github Profile</a>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default User;