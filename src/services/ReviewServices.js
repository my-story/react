import http from './BaseServices';

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