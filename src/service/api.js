import axios from 'axios';

const API_KEY='21317118-a3e80b11648aa5bbeb58b27e4';
const URL= 'https://pixabay.com/api/'


export const getImages= (text,count) => {
    try {
        const data= axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    } catch(error) {
        console.log(error);
    }
}