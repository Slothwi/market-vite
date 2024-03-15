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

const getProductsFavs = async (token) => {
    try {
        const response = await axios.get(urlBaseServer + 'user/myfavsproducts', { headers: { Authorization: `Bearer ${token}` } })
        return response.data
    } catch (error) {
        console.error('error getProducts: ', error)
        return null
    }
};

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

const deleteProdFavs = async (token, id_prod_favorito) => {
    try {
        console.log('delete id', id_prod_favorito)
        const response = await axios.delete(urlBaseServer + 'user/myfavsproducts/' + id_prod_favorito, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response
      
    } catch (error) {
        console.error('error deleteProdFavs: ', error)
        return null
    }
};

const addProdFavs = async (token, id) => {
    try {
        const producto = { id_producto: id }
        const response = await axios.post(urlBaseServer + 'user/myfavsproducts/', producto, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data
    } catch (error) {
        console.error('error addProdFavs: ', error)
        return null
    }
};
export { getProducts, getProductsFavs, deleteProdFavs, addProdFavs, createProduct }
