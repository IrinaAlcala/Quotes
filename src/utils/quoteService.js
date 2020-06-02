const BASE_URL = '/api/quotes'


export function getQuote(type) {
    return fetch(BASE_URL + '/?type=' + type).then(res => res.json());
}