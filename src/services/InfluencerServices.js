import http from './BaseServices';

const createInfluencer = (data) => http.post('/influencer/create', data)
  .then((res)=> res.data);

const getAll = () => http.get('/influencer/all')
  .then((res) => res.data);

const deleteInfluencer = (user, id) => http.post(`/influencer/delete/${id}`, user)
  .then((res) => res);

const getFilter = (search) => http.get(`/influencer/filter?search=${search}`)
  .then((res) => res.data);


export default {
    createInfluencer,
    getAll,
    deleteInfluencer,
    getFilter
}