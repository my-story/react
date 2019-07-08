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

const productDetail = (id) => http.get(`/product/details/${id}`)
  .then((res) => res.data)

const searchProduct = (search) => http.get(`/product/filter?search=${search}`)
  .then((res) => res.data)

const deleteProduct = (id) => http.post(`http://localhost:3002/product/delete/${id}`)
  .then((res) => res.data)

const updateProduct = (id, product) => http.post(`http://localhost:3002/product/edit/${id}`, product)
  .then((res) => res.data)

export default {
  getAll,
  productForm,
  productImage,
  productDetail,
  searchProduct,
  deleteProduct,
  updateProduct
}