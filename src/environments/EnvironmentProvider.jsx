import { bool, node, object } from "prop-types";
import React, { useMemo } from "react";

const EnvironmentContext = React.createContext(undefined);

const defaultEnv = {
  apiUrl: process.env.REACT_APP_API_URL || "http://localhost:8181/api",
  isTest: false,
};

const EnvironmentProvider = ({ children, override, isTest }) => {
  const value = useMemo(
    () => ({
      ...defaultEnv,
      ...override,
      isTest,
    }),
    [],
  );

  return (
      <EnvironmentContext.Provider value={value}>
          {children}
      </EnvironmentContext.Provider>
  );
};

EnvironmentProvider.propTypes = {
  children: node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  override: object,
  isTest: bool,
};

EnvironmentProvider.defaultProps = {
  override: null,
  isTest: false,
};

const useEnv = () => {
  const context = React.useContext(EnvironmentContext);
  if (!context) {
    throw new Error("useEnv must be used within a EnvironmentProvider");
  }

  return context;
};

export { useEnv, EnvironmentProvider };
