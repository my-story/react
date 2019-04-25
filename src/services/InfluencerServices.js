import http from './BaseServices'

const createInfluencer = (data) =>
  http.post('/influencer/create', data)
    .then((res)=> res.data);

const getAll = () => 
  http.get('/influencer/all')
    .then((res) => res.data);

    export default {
        createInfluencer,
        getAll
      }