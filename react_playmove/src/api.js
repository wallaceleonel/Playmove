import axios from 'axios';
import { useEffect, useState } from 'react';

function api() {

const baseUrl = 'https://localhost:44303/api/Providers';

const [data,setData]=useState([]);

const fornecedoresGet = async() =>{
    await axios.get(baseUrl)
    .then(response =>{
        setData(response.data);
    }).catch(error =>{
        console.log(error);
    })
}
useEffect(() =>{
    fornecedoresGet();
})
}
export default api;
