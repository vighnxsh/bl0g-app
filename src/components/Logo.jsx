
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ width = '100px' }) => {
    return (
        <Link to="/">
            <img
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
                width={width}
            />
        </Link>
    );
}

export default Logo;