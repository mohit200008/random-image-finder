import axios from 'axios';

const API_KEY='21317118-a3e80b11648aa5bbeb58b27e4';
const URL= 'https://pixabay.com/api/'


export const getImages= () => {
    try {
        const data= axios.get(`${URL}/?key=${API_KEY}&q=mountains&image_type=photo&per_page=15&safesearch=true`)
        return data;
    } catch(error) {
        console.log(error);
    }
}