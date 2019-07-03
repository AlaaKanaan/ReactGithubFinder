import React, {useState, Fragment} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GithubState from './context/github/GithubState';

import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

const App = () => {


    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);


    // get a single github user
    const getUser = async (username) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setUser(res.data);
        setLoading(false);
    };

    // get a users repos github
    const getUserRepos = async (username) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        setRepos(res.data);
        setLoading(false);
    };


    // set alert
    const showAlert = (msg, type) => {
        setAlert({msg, type});
        //clear alert after 5 second
        setTimeout(() => setAlert(null), 5000);
    };


    return (
        <GithubState>
            <Router>
                <div className="App">
                    <Navbar/>
                    <div className="container mt-4">
                        <Alert alert={alert}/>
                        <Switch>
                            <Route exact path='/' render={props => (
                                <Fragment>
                                    <Search setAlert={showAlert}
                                    />
                                    <Users/>
                                </Fragment>
                            )}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/user/:login' render={props => (
                                <User {...props} getUser={getUser} user={user} loading={loading}
                                      getUserRepos={getUserRepos}
                                      repos={repos}
                                />
                            )}/>
                        </Switch>

                    </div>
                </div>
            </Router>
        </GithubState>
    );

};

export default App;