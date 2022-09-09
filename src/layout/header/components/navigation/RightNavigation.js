import React from "react";

import NavRouteLink from "./NavRouteLink";
import ROUTES from "./../../../../routes/routesModel";
import { useUser } from "../../../../users/UserProvider";

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

      {user && <NavRouteLink route={ROUTES.LOGOUT} />}
    </ul>
  );
};

export default RightNavigation;
