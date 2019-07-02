import React from 'react';
import spinner from './spinner_github.svg';

const Spinner = () =>
    <div className="d-flex justify-content-center">
        <img src={spinner} alt="loading..." width="100"/>
    </div>;

export default Spinner;