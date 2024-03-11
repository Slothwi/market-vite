import { createContext, useState, useEffect } from 'react'
 
export const ProductContext = createContext()

const listPasoShopping = [
  {
    "id": "1",
    "nombre": "Bujia",
    "marca": "Champion",
    "descripcion": "Bujia hasta 60mil KM",
    "precio": 7000,
    "imagen":"imagen1",
    "cantidad":1
  },
  {
    "id": "2",
    "nombre": "Correa",
    "marca": "Gates",
    "descripcion": "Correa 7PK",
    "precio": 10000,
    "imagen":"imagen2",
    "cantidad":1
  }
]

const ProductProvider = ({ children }) => {
  const [listShoppingCart, setListShoppingCart] = useState([])

  const searchProducts = () => {
    setListShoppingCart(listPasoShopping)
  }

  const addProductShopping = (prod) => {
    const indexProd = listShoppingCart.findIndex(item => item.id === prod.id)
    if (indexProd < 0) {
      setListShoppingCart([...listShoppingCart, { id: prod.id, name: prod.name, price: prod.price, cantidad: 1 }])
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


  useEffect(() => {
    searchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ listShoppingCart, setListShoppingCart, addProductShopping, removeProductShopping, calculateAmount, quantityProduct }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider
