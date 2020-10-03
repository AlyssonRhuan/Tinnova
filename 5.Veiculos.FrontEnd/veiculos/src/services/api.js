import axios from 'axios';

let api = axios.create({
    baseURL: 'http://localhost:8080'
});

function error(e) {
  console.error(e.response ? e.response.data.message : e.message);
}

api.interceptors.response.use(function (response) {
    return response;
}, function (e) {
    error(e);    
    return Promise.reject(error);
});

export default api