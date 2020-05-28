const BASE_URL = '/api/Quotes'


export function getQuote(type) {
    return fetch(BASE_URL + '/?type=' + type).then(res => res.json());
}