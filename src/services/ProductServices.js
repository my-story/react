import http from './BaseServices';

const getAll = () => 
  http.get('/product/all')
    .then(response => response.data);

export default {
  getAll
}