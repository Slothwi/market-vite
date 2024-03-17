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

export { getOrders };
