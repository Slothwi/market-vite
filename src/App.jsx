import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from '../src/Views/Home'
import Access from '../src/Views/Access'
import Carrito from '../src/Views/CarritoCompras'
import Favs from '../src/Views/Favoritos'
import Profile from '../src/Views/Profile'
import Publicar from '../src/Views/Publicar'
import Registro from '../src/Views/Registro'
import Ventas from '../src/Views/MisPublicaciones'
import Historial from '../src/Views/Historial'
import MainPage from '../src/Components/MainPage'
import Config from '../src/Views/Config'

import { Routes, Route } from "react-router-dom";
import ProductProvider from './Context/ProductContext'

function App() {

  return (
    <div>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Access />} />
          <Route path="/mainpage" element={<MainPage />}>
            <Route index element={<Home />} />
            <Route index element={<Favs />} />
            <Route index element={<Ventas />} />
            <Route index element={<Publicar />} />
            <Route index element={<Carrito />} />
            <Route index element={<Historial />} />
            <Route index element={<Profile />} />
            <Route index element={<Config />} />
            <Route path="home" element={<Home />} />
            <Route path="favs" element={<Favs />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="publicar" element={<Publicar />} />
            <Route path="carritoCompras" element={<Carrito />} />
            <Route path="historial" element={<Historial />} />
            <Route path="profile" element={<Profile />} />
            <Route path="config" element={<Config />} />
          </Route>
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </ProductProvider>
    </div>
  )
}

export default App
