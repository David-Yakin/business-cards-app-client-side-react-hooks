import React from 'react';
import { useUser } from '../../../../user/UserProvider';
import ROUTES from '../../../../model/routes';
import NavRouteLink from './NavRouteLink';

const RightNavigation = () => {
    const { user } = useUser();

    return (
        <ul className="navbar-nav ml-auto">
            {!user && (
                <>
                    <NavRouteLink route={ROUTES.SIGN_IN} />
                    <NavRouteLink route={ROUTES.SIGN_UP} />
                    <NavRouteLink route={ROUTES.BIZ_SIGN_UP} />
                </>
            )}

            {user && (
                <NavRouteLink route={ROUTES.LOGOUT} />
            )}
        </ul>
    );
};

export default RightNavigation;
