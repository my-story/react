import http from './BaseServices';

const signup = (user)  => http.post('api', user)
  .then(response => response);

const login = (user) => http.post('api/login', user)
  .then(response => response);

const logout = (user) => http.post('api/logout', user)
  .then(response => response);

const loggedin = () => http.get('api/private')
  .then(response => response);

export default {
  signup,
  login,
  logout,
  loggedin
}
