import http from './BaseServices';

const getAll = () => http.get('/podcast/all')
  .then(response => response.data);

const getOne = (id) => http.get(`/podcast/detail/${id}`)
  .then(response => response.data);

const create = (data) => http.post(`/podcast/create`, data)
  .then(response => response.data);
  
const edit = (data, id) => http.post(`podcast/${id}`, data)
  .then(response => response.data);


export default {
  getAll,
  getOne,
  create,
  edit
}
