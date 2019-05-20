import http from './BaseServices';

const sendMail = (name,email) =>
    http.post('/authorize/contact',name,email)
    .then(response => response.data);

export default {
    sendMail
}