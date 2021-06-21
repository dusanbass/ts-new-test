import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

const fetcher = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    console.log('fetcher() api call:')
    console.log(data)
}

export const fetchGitHub = async () => {
    const response = await fetch('https://github.com/');
    const data = await response.text();


    console.log('fetchGitHub() api call:')
    console.log(data)
}

export const postHttp = async () => {
    const params = new URLSearchParams();
    params.append('a', '1');
    const config = { method: 'POST', body: params }
    console.log('config: ', config)
    const response = await fetch('https://httpbin.org/post', config);
    const data = await response.text();


    console.log('post http method api call:')
    console.log(data)

}

export default fetcher;