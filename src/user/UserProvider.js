import React, {
 useCallback, useEffect, useMemo, useState,
} from "react";
import { node } from "prop-types";
import useUserEndpoints from "./useUserEndpoint";
import localStorageService from "./userCacheService";

const UserContext = React.createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { signupApi, loginApi } = useUserEndpoints();

  useEffect(() => {
    if (!user) {
      const localStorageUser = localStorageService().getUser();
      setUser(localStorageUser);
    }
  }, [user]);

  const logout = useCallback(() => {
    localStorageService.removeUser();
    setUser(null);
  }, []);

  const login = useCallback(
    async (loginUser) => {
      const {
        data: { token },
      } = await loginApi(loginUser);
      setUser(loginUser);
      localStorageService.updateUser(token);
    },
    [loginApi],
  );

  const register = useCallback(
    async (registerUser) => {
      await signupApi(registerUser);
      return login(registerUser);
    },
    [login, signupApi],
  );

  const value = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
    }),
    [user, login, register, logout],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: node.isRequired,
};

const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");

  return context;
};

export { useUser, UserProvider };
