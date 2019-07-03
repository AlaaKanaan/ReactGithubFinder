import React, {useState, useContext} from 'react';
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({setAlert}) => {

    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');


    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter search text', 'danger');
        } else {
            githubContext.searchUsers(text);
        }
    };


    return (
        <div className="search-form">
            <form onSubmit={onSubmit} className="form border-0">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={text}
                           onChange={onChange}
                           name="text"
                           placeholder="Search users..."
                           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Search</button>
                        {githubContext.users.length > 0 && (
                            <button className="btn btn-danger" onClick={githubContext.clearUsers}
                                    type="button">Clear</button>
                        )}

                    </div>
                </div>
            </form>
        </div>
    );
};

Search.propTypes = {
    setAlert: PropTypes.func.isRequired
};


export default Search;