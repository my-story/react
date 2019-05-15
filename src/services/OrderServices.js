import http from './BaseServices';

const getCart = (userId) => http.get(`order/${userId}`)
  .then(response => response.data);

const payCart = (user,address,addressCity,addressZip) => http.post(`order/payment`,user,address,addressCity,addressZip)
export default {
  getCart,
  payCart
}