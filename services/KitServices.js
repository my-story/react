import http from './BaseServices';

const getKit = (id) => http.get(`/kit/survival/${id}`)
  .then((res) => res.data);

const kitCreate = (kit) => http.post('/kit/create',kit)
    .then((res) => res.data);

const kitProductBacked = (id) => http.get('/kit/popular', id)
  .then((res) => res.data)

const getKitAdmin = (id) => http.get(`/kit/admin/${id}`)
  .then((res) => res.data);

const updateKit = (kit, id) => http.post(`/kit/update/${id}`, kit)
  .then((res) => res.data);

const createTechnique = (technique) => http.post(`/kit/create/technique`, technique)
  .then((res) => res.data);

export default {
    getKit,
    kitCreate,
    kitProductBacked,
    getKitAdmin,
    updateKit,
    createTechnique
}