import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Home from '../src/views/Home'
import Access from '../src/views/Access'
import ShoppingCart from './views/ShoppingCart'
import Favs from '../src/views/Favs'
import Profile from './views/Profile'
import Publish from '../src/views/Publish'
import Registro from './views/Register'
import Mypublications from './views/Mypublications'
import Historial from '../src/views/Historial'
import MainPage from '../src/components/MainPage'
import Config from './views/Config'
import NotFound from "../src/views/NotFound";

import { Routes, Route } from "react-router-dom";
import ProductProvider from './context/ProductContext'
import UserProvider from './context/UserContext'

function App() {

  return (
    <div>
      <ProductProvider>
        <UserProvider>
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
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
        </UserProvider>
      </ProductProvider>
    </div>
  )
}

export default App
