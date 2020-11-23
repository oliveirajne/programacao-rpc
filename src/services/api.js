import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.allorigins.win/raw?url=https://epg-api.video.globo.com/programmes/',
    headers: {
        "contentType": 'application/json'

    }

    
});

export default api;