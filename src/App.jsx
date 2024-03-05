import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from '../src/Views/Home'
import Access from '../src/Views/Access'
import ShoppingCart from './Views/ShoppingCart'
import Favs from '../src/Views/Favs'
import Profile from '../src/Views/Profile'
import Publish from '../src/Views/Publish'
import Registro from './Views/Register'
import Mypublications from './Views/Mypublications'
import Historial from '../src/Views/Historial'
import MainPage from '../src/Components/MainPage'
import Config from '../src/Views/Config'
import NotFound from "../src/Views/NotFound";

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
            <Route index element={<Mypublications />} />
            <Route index element={<Publish />} />
            <Route index element={<ShoppingCart />} />
            <Route index element={<Historial />} />
            <Route index element={<Profile />} />
            <Route index element={<Config />} />
            <Route path="home" element={<Home />} />
            <Route path="favs" element={<Favs />} />
            <Route path="mypublications" element={<Mypublications />} />
            <Route path="publish" element={<Publish />} />
            <Route path="shopping-cart" element={<ShoppingCart />} />
            <Route path="historial" element={<Historial />} />
            <Route path="profile" element={<Profile />} />
            <Route path="config" element={<Config />} />
          </Route>
          <Route path="/register" element={<Registro />} />
          <Route path="*" element={<NotFound />}
        />
        </Routes>
      </ProductProvider>
    </div>
  )
}

export default App
