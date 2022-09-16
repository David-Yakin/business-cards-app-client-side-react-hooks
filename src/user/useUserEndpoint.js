import axios from "axios";
import { useEnv } from "../environments/EnvironmentProvider";

const useUserEndpoints = () => {
  const { apiUrl } = useEnv();
  const signupApi = (user) => axios.post(`${apiUrl}/users/register`, user);

  const loginApi = ({ email, password }) => axios.post(`${apiUrl}/users/login`, { email, password });

  return { signupApi, loginApi };
};

export default useUserEndpoints;
