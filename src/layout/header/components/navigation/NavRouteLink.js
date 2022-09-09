import React from 'react';
import { NavLink } from 'react-router-dom';
import * as PropTypes from 'prop-types';

const NavRouteLink = ({ route }) => {
    const { to, label } = route;
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={to}>
                {label}
            </NavLink>
        </li>
    );
};

NavRouteLink.propTypes = {
    route: PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string,
    }).isRequired,
};

export default NavRouteLink;
