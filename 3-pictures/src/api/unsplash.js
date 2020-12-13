import axios from 'axios';

const accessKey = 'Q1YypJbPXfv2Bpc451qZOOfSqY3o_zwPo8y8GK5jeOI';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: `Client-ID ${accessKey}` }
});