import http from './BaseServices';

const charge = (info) => http.post('/payment/charge', info)
  .then((res) => res);


  export default {
    charge
  }