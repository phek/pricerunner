import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://www.pricerunner.se',
});

function getJsonHeaders() {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };
}

export function getJson(url) {
    return instance.get(url, getJsonHeaders());
}
