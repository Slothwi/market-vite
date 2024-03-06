import axios from "axios";

const urlBaseServer = import.meta.env.VITE_URLBACKEND

const getProducts = async () => {
    try {
        const response = await axios.get(urlBaseServer + 'products')
        return response.data
    } catch (error) {
        console.error('error getProducts: ', error)
        return null
    }
  };

  export {getProducts}