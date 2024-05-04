import axios from 'axios';

const nodeServiceApi = axios.create({
    baseURL: 'http://localhost:6004/api',
});



export const countletters= () => nodeServiceApi.post(`/countletters` );
export const writeCharachters= () => nodeServiceApi.post(`/writeCharacters` );

  
const apis = {
    countletters,
    writeCharachters,
}

export default apis;