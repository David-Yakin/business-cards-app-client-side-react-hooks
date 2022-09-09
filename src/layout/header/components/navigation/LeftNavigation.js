import React from "react";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/UserProvider";

import NavRouteLink from "./NavRouteLink";

const LeftNavigation = () => {
  const { user } = useUser();

  return (
    <ul className="navbar-nav mr-auto">
      <NavRouteLink route={ROUTES.ABOUT} />

      {user && user.biz && <NavRouteLink route={ROUTES.MY_CARDS} />}

      {user && (
        // eslint-disable-next-line max-len
        <NavRouteLink route={ROUTES.MY_FAVORITE_CARDS} />
      )}
    </ul>
  );
};

export default LeftNavigation;
