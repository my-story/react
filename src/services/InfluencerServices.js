import http from './BaseServices'

const createInfluencer = () =>
  http.post('influencer/create')
    .then((res)=> res.data)

const getAll = () => 
  http.get('influencer/all')
    .then(response => response.data);

    export default {
        createInfluencer,
        getAll
      }