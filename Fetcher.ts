import fetch from 'node-fetch';

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

export default fetcher;