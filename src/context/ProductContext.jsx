import { createContext, useState } from 'react'
 
export const ProductContext = createContext()
// const initialForm = { id: '', nombre: '', marca: '', descripcion: '', precio: '', imagen: '', cantidad:'' }

const ProductProvider = ({ children }) => {
  const [listShoppingCart, setListShoppingCart] = useState([])

  const addProductShopping = (prod) => {
    
    const indexProd = listShoppingCart.findIndex(item => item.id === prod.id)
    if (indexProd < 0) {
      setListShoppingCart([...listShoppingCart, { id: prod.id, nombre: prod.nombre, marca: prod.marca, descripcion: prod.descripcion,
        precio: prod.precio, cantidad: 1 }])
    } else {
      listShoppingCart[indexProd].cantidad = listShoppingCart[indexProd].cantidad + 1
      setListShoppingCart([...listShoppingCart])
    }
  }

  const removeProductShopping = (prod) => {
    const indexProd = listShoppingCart.findIndex(item => item.id === prod.id)
    if (listShoppingCart[indexProd].cantidad === 1) {
      setListShoppingCart(listShoppingCart.filter(item => item.id !== prod.id))
    } else {
      listShoppingCart[indexProd].cantidad = listShoppingCart[indexProd].cantidad - 1
      setListShoppingCart([...listShoppingCart])
    }
  }

  const calculateAmount = () => {
    const total = (listShoppingCart.reduce((accumulator, prod) => accumulator + prod.precio * prod.cantidad, 0))
    return total.toLocaleString()
  }

  const quantityProduct = () => {
    const count = (listShoppingCart.reduce((accumulator, prod) => accumulator + prod.cantidad, 0))
    return count 
  }

  return (
    <ProductContext.Provider value={{ listShoppingCart, setListShoppingCart, addProductShopping, removeProductShopping, calculateAmount, quantityProduct }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider
