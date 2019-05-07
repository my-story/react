import http from './BaseServices';

// const oneReview = (review) =>
//   http.get(`/reviews/specific/${id}`,review)
//   .then((res)=>res.data)

const createReview = (review) => 
  http.post('/reviews/new',review)
    .then((res) => res.data);
  
const reviewVoice = (review) =>
  http.create('/reviews/upload/voicenote',review)
    .then((res)=>res.data)


    export default {
      createReview,
      reviewVoice
    }