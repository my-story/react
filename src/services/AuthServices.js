import http from './BaseServices';

const signup = (user)  => http.post('api/signup', user)
  .then(response => response.data);

const login = (user) => http.post('api/login', user)
  .then(response => response.data)

const logout = (user) => http.post('api/logout')
  .then(response => response.data);

const loggedin = () => http.get('api/private')
  .then(response => response.data);

export default {
  signup,
  login,
  logout,
  loggedin
}
