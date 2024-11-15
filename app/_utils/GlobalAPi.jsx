const { default: axios } = require("axios");

const axiosClient = axios.create({
    baseURL: 'http://192.168.246.123:1337/api',
});

const getCategory =()=>axiosClient.get('/categories?populate=*');

const getSliders=()=>axiosClient.get('/sliders?populate=*').then(resp=>{
    return resp.data.data;
})

export default{
    getCategory,
    getSliders
}

