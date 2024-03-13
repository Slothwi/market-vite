import axios from "axios";

const urlBaseServer = import.meta.env.VITE_URLBACKEND

const getProducts = async (query) => {
    try {
        const response = await axios.get(urlBaseServer + 'products', { params: query })
        return response.data
    } catch (error) {
        console.error('error getProducts: ', error)
        return null
    }
};

export { getProducts }


const getProductsFavs = async (query, token) => {
    try {
        const response = await axios.get(urlBaseServer + 'user/myfavproducts', { params: query },
            { headers: { Authorization: `Bearer ${token}` } })
        console.log(response)
        return response.data
    } catch (error) {
        console.error('error getProducts: ', error)
        return null
    }
};

export { getProductsFavs }