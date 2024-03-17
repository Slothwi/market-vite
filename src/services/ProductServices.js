import axios from "axios";

const urlBaseServer = import.meta.env.VITE_URLBACKEND;

const getProducts = async (query) => {
  try {
    const response = await axios.get(urlBaseServer + "products", {
      params: query,
    });
    return response.data;
  } catch (error) {
    console.error("error getProducts: ", error);
    return null;
  }
};

const getProductsFavs = async (token) => {
  try {
    const response = await axios.get(urlBaseServer + "user/myfavsproducts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("error getProducts: ", error);
    return null;
  }
};

const createProduct = async (productData, token) => {
  try {
    const response = await axios.post(urlBaseServer + "products", productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Producto creado exitosamente:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};

const deleteProdFavs = async (token, id_prod_favorito) => {
  try {
    const response = await axios.delete(
      urlBaseServer + "user/myfavsproducts/" + id_prod_favorito,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    console.error("error deleteProdFavs: ", error);
    return null;
  }
};

const addProdFavs = async (token, id) => {
  try {
    const producto = { id_producto: id };
    const response = await axios.post(
      urlBaseServer + "user/myfavsproducts/",
      producto,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("error addProdFavs: ", error);
    return null;
  }
};

const getAllPosts = async () => {
  try {
    const token = window.sessionStorage.getItem("token");
    const response = await axios.post(
      urlBaseServer + "myposts",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("error getAllPosts: ", error);
    return null;
  }
};

const getOrders = async () => {
  try {
    const token = window.sessionStorage.getItem("token");

    if (!token) {
      throw new Error("Token de autenticación no encontrado en sessionStorage");
    }

    const response = await axios.post(
      urlBaseServer + "user/orders",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error al obtener los pedidos del usuario:", error);
    throw error;
  }
};

export {
  getProducts,
  getProductsFavs,
  deleteProdFavs,
  addProdFavs,
  createProduct,
  getAllPosts,
  getOrders,
};
