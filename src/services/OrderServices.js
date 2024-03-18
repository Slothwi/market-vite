import axios from "axios";

const urlBaseServer = import.meta.env.VITE_URLBACKEND;

const getOrders = async () => {
    try {
        const token = window.sessionStorage.getItem('token');

        if (!token) {
            throw new Error('Token de autenticación no encontrado en sessionStorage');
        }

        const response = await axios.get(urlBaseServer + 'user/orders', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error al obtener los pedidos del usuario:', error);
        throw error;
    }
};

const orderShopping = async (item) => {
    try {
        const token = window.sessionStorage.getItem('token');  
        if (!token) {
            throw new Error('Token de autenticación no encontrado en sessionStorage');
        }  

        let nroPedido = window.sessionStorage.getItem('nroPedido');       
        console.log('nroPedidosesion', nroPedido)
        if (!nroPedido) {
            const detailProd = { id_producto: item.id_producto, price: item.precio, quantity: 1, action: 'add'  }            
            const response = await axios.post(urlBaseServer + 'user/orders', detailProd, { headers: { "Authorization": `Bearer ${token}` } }, {})
            nroPedido = response.data.pedido_id
            window.sessionStorage.setItem('nroPedido', nroPedido)
            console.log('no hay numero pedido   pedido', nroPedido)
            console.log('no hay numero pedido  response', response)
            return response.data;
        }
        else
        {
            const detailProd = { id_producto: item.id_producto, price: item.precio, quantity: 1, action: 'add', id_pedido: nroPedido  }
            const response = await axios.post(urlBaseServer + 'user/orders', detailProd, { headers: { "Authorization": `Bearer ${token}` } }, {})
            console.log('hay numero pedido  response', response)
            return response.data;
        }   
        
        
    } catch (error) {
        console.error('Error al obtener los pedidos del usuario:', error);
        throw error;
    }
};

const getDetailOrderShopping = async () => {
    try {
        const token = window.sessionStorage.getItem('token');
        const nroPedido = window.sessionStorage.getItem('nroPedido');
        if (!token) {
            throw new Error('Token de autenticación no encontrado en sessionStorage');
        }
        const response = await axios.get(urlBaseServer + 'user/orders/' + nroPedido, { headers: {"Authorization": `Bearer ${token}`} });
        console.log('detalle del pedido', response)
        return response.data;
    } catch (error) {
        console.error('Error al obtener los pedidos del usuario:', error);
        throw error;
    }
};

const addProdShopCart = async (id_detalle, detailAction) => {
    try {
        const token = window.sessionStorage.getItem('token');
        const response = await axios.put(urlBaseServer + 'user/orders/detail/' + id_detalle, detailAction, {headers: { Authorization: `Bearer ${token}` }})
        return response.data
    } catch (error) {
        console.error('error addProdShopCart: ', error)
        return null
    }
};

const remProdShopCart = async (id_detalle, detailAction) => {
    try {
        const token = window.sessionStorage.getItem('token');
        const response = await axios.put(urlBaseServer + 'user/orders/detail/' + id_detalle, detailAction, {headers: { Authorization: `Bearer ${token}` }})
        return response.data
    } catch (error) {
        console.error('error remProdShopCart: ', error)
        return null
    }
};

const remDetailShopCart = async (id_detalle) => {
    try {
        const token = window.sessionStorage.getItem('token');
        const response = await axios.delete(urlBaseServer + 'user/orders/detail/' + id_detalle, {headers: { Authorization: `Bearer ${token}` }})
        return response.data
    } catch (error) {
        console.error('error remProdShopCart: ', error)
        return null
    }
};

export { getOrders, orderShopping, getDetailOrderShopping, addProdShopCart, remProdShopCart, remDetailShopCart };
