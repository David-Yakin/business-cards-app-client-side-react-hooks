import { node } from "prop-types";
import { EnvironmentProvider } from "./EnvironmentProvider";

const TestEnvironmentProvider = ({ children }) => (
    <EnvironmentProvider override={{ isTest: true }}>
        {children}
    </EnvironmentProvider>
);

TestEnvironmentProvider.propTypes = {
  children: node.isRequired,
};

export default TestEnvironmentProvider;
