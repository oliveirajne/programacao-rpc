import axios from 'axios';

const api = axios.create({
    baseURL: 'https://epg-api.video.globo.com/programmes/',
    headers: {'Access-Control-Allow-Origin': '*'}
});

export default api;