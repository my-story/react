import http from './BaseServices';

const getAll = () => 
  http.get('/product/all')
    .then((res) => res.data);
  
const productForm = (product) =>
  http.post('/product/create',product)
  .then((res)=> res.data);

const productImage = (product) =>
  http.create('/product/upload/picture',product)
  .then((res)=>res.data)
  
export default {
  getAll,
  productForm,
  productImage
}