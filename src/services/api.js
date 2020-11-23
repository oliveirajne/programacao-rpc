import axios from 'axios';

const api = axios.create({
    baseURL: 'https://thingproxy.freeboard.io/fetch/https://epg-api.video.globo.com/programmes/',
    headers: {
        "contentType": 'application/json'

    }

    
});

export default api;