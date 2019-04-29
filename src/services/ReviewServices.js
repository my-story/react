import http from './BaseServices';

const createReview = () => 
  http.post('/new')
    .then((res) => res.data);


    export default {
      createReview
    }