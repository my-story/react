import http from './BaseServices';

const getAll = (data)  => http.get('/podcast', data)
  .then(response => response.data);

const getOne = (id)  => http.get(`/podcast/${id}`)
  .then(response => response).data;

const create = (data)  => http.post(`/podcast/create`, data)
  .then(response => response.data);
  
const edit = (data, id) => http.post(`podcast/${id}`, data)
  .then(response => response.data);


export default {
  getAll,
  getOne,
  create,
  edit
}
