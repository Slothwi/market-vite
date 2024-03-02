import { createContext, useState, useEffect } from 'react'
 
export const ProductContext = createContext()

const listPaso = [
  {
    "desc": "Neumaticos Aro 30",
    "id": "P001",
    "name": "Neumatico",
    "price": 23000,
    "cantidad":1
  },
  {
    "desc": "Pastillas Freno",
    "id": "P002",
    "name": "Pastillas",
    "price": 32000,
    "cantidad": 5
  }
]

const ProductProvider = ({ children }) => {
  const [listShoppingCart, setListShoppingCart] = useState([])

  const searchProducts = () => {
    setListShoppingCart(listPaso)
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
    const total = (listShoppingCart.reduce((accumulator, prod) => accumulator + prod.price * prod.cantidad, 0))
    return total.toLocaleString()
  }

  useEffect(() => {
    searchProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ listShoppingCart, setListShoppingCart, addProductShopping, removeProductShopping, calculateAmount }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider
