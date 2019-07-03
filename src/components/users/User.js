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
            avatar_url,
            html_url,
            name,
            bio,
            location
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

                            {bio && <Fragment>
                                <p className="card-text w-50 m-auto">
                                    {bio}
                                </p>
                            </Fragment>}

                            <a href={html_url} target="_blank" className="btn btn-sm btn-dark mt-3">Github Profile</a>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default User;