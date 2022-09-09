import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const useUserEndpoints = () => {
  const signupApi = (user) => axios.post(`${apiUrl}/users/register`, user);

  const loginApi = ({ email, password }) => axios.post(`${apiUrl}/users/login`, { email, password });

  return { signupApi, loginApi };
};

export default useUserEndpoints;
