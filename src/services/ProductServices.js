import http from './BaseServices';

const getAll = () => 
  http.get('/product/all')
    .then((res) => res.data);
  
const productForm = () =>
  http.post('/product/create')
  .then((res)=> res.data);

export default {
  getAll,
  productForm
}