import http from './BaseServices';

const getKit = (id) => {
    http.get(`/kit/${id}`)
    .then((res) => res.data);
}

const kitCreate = (kit) => http.post('/kit/create',kit)
    .then((res) => res.data);

export default {
    getKit,
    kitCreate
}