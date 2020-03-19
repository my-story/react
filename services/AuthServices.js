import http from './BaseServices';

const signup = (user)  => http.post('api', user)
  .then(response => response);

const login = (user) => http.post('api/login', user)
  .then(response => response);

const logout = (user) => http.post('api/logout', user)
  .then(response => response);

const loggedin = () => http.get('api/private')
  .then(response => response);

const favoriteTechnique = (id, technique) => http.post(`api/add/technique/${id}/${technique}`)
  .then((res) => res.data);

const favoriteTip = (id, tip) => http.post(`api/add/tip/${id}/${tip}`)
  .then((res) => res.data)

const favoriteProduct = (id, product) => http.post(`api/add/product/${id}/${product}`)
  .then((res) => res.data)

const favoriteKit = (id, kit) => http.post(`api/add/kit/${id}/${kit}`)
  .then((res) => res.data)

export default {
  signup,
  login,
  logout,
  loggedin,
  favoriteTechnique,
  favoriteTip,
  favoriteProduct,
  favoriteKit
}
