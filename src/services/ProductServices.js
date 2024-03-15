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


const getProductsFavs = async (token) => {
    try {
        const response = await axios.get(urlBaseServer + 'user/myfavproducts',  { headers: { Authorization: `Bearer ${token}` } })
        return response.data
    } catch (error) {
        console.error('error getProducts: ', error)
        return null
    }
};

export { getProductsFavs }

const createProduct = async (productData, token) => {
    try {
        const response = await axios.post(
            urlBaseServer + 'products',
            productData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        console.log('Producto creado exitosamente:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al crear el producto:', error);
        throw error;
    }
};

export {createProduct}