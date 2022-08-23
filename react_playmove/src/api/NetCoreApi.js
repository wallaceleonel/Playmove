import axios from 'axios';

const api = axios.create({

    baseUrl : "https://localhost:44303/",
});

export default api;
