// import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import Nav from './Components/Navbar'
// import Home from './Views/Home'
// import Sidebar from './Components/Sidebar'
// import Access from './Views/Access'
// import Cart from './Views/Cart'
// import Favs from './Views/Favoritos'
// import Profile from './Views/Profile'
// import Publicar from './Views/Publicar'
// import Registro from './Views/registro'
// import Ventas from './Views/Ventas'
// import Historial from './Views/Historial'
// import MainPage from './Components/MainPage'
// import { Outlet } from "react-router-dom";
// import { Container } from "react-bootstrap";

import Themeroutes from "./routes/Router";
import { useRoutes } from "react-router-dom";

function App() {
  const routing = useRoutes(Themeroutes);
  
  return (
    <div>
      {routing}
    </div>
  )
}

export default App
