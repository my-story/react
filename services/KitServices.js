import http from './BaseServices';

const getKit = (id) => http.get(`/kit/survival/${id}`)
  .then((res) => res.data);

const kitCreate = (kit) => http.post('/kit/create',kit)
    .then((res) => res.data);

const kitProductBacked = (id) => http.get('/kit/popular', id)
  .then((res) => res.data)

export default {
    getKit,
    kitCreate,
    kitProductBacked
}