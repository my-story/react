import http from './BaseServices';

const getCart = (userId) => http.get(`order/${userId}`)
  .then(response => response.data);

const payCart = (user,cardname,address,addressCity,addressZip) => http.post(`order/payment`,user,cardname,address,addressCity,addressZip)
  .then(response=>response.data)

  const createOrder = (products ,cardname,address,addressCity,addressZip) => http.post(`order/add`,products,cardname,address,addressCity,addressZip)
  .then(response=>response.data)

export default {
  getCart,
  payCart,
  createOrder
}