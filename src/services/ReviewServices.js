import http from './BaseServices';

const createReview = (review) => 
  http.post('/reviews/new',review)
    .then((res) => res.data);
  
const reviewVoice = (review) =>
  http.create('/reviews/upload/voicenote',review)
    .then((res) => res.data);

const editReview = (review, id) =>
  http.post(`/reviews/edit/${id}`, review)
    .then((res) => res.data);

const getReview = (id) =>
  http.get(`/reviews/specific/${id}`)
    .then((res) => res);

const deleteReview = (user, id) =>
  http.post(`/reviews/delete/${id}`, user)
    .then((res) => res);


export default {
  createReview,
  reviewVoice,
  editReview,
  getReview,
  deleteReview
}