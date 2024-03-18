import { createContext, useEffect, useState } from 'react'
import { getDetailOrderShopping } from '../services/OrderServices';

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [arrayShoppingCart, setArrayShoppingCart] = useState([]);

  const getProdShop = async () => {
    const data = await getDetailOrderShopping()
    setArrayShoppingCart(data.detalle)
   };

  const calculateAmount = () => {
    if (Array.isArray(arrayShoppingCart) && arrayShoppingCart.length > 0)
    { const total = (arrayShoppingCart.reduce((accumulator, prod) => accumulator + prod.neto * prod.cantidad, 0))
      return total.toLocaleString() }
  }

  const quantityProduct = () => {
    if (Array.isArray(arrayShoppingCart) && arrayShoppingCart.length > 0)
       {  const count = (arrayShoppingCart.reduce((accumulator, prod) => accumulator + prod.cantidad, 0))
         return count }
  }

  useEffect(() => {
   setArrayShoppingCart([])
}, []);

  return (
    <ProductContext.Provider value={{ arrayShoppingCart, setArrayShoppingCart, calculateAmount, quantityProduct, getProdShop }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider
