import Home from '../Views/Home'
import Access from '../Views/Access'
import Carrito from '../Views/CarritoCompras'
import Favs from '../Views/Favoritos'
import Profile from '../Views/Profile'
import Publicar from '../Views/Publicar'
import Registro from '../Views/registro'
import Ventas from '../Views/MisPublicaciones'
import Historial from '../Views/Historial'
import MainPage from '../Components/MainPage'
import Config from '../Views/Config'

/*****Routes******/
const detailtRoutes = [
  {
    path: "/",      
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", exact: true, element: <Home /> },
      { path: "/Access", exact: true, element: <Access /> },
      { path: "/Registro", exact: true, element: <Registro /> },
      { path: "/CarritoCompras", exact: true, element: <Carrito /> },
      { path: "/Favs", exact: true, element: <Favs /> },
      { path: "/Profile", exact: true, element: <Profile /> },
      { path: "/Publicar", exact: true,  element: <Publicar />},
      { path: "/Ventas", exact: true, element: <Ventas /> },
      { path: "/Historial", exact: true,  element: <Historial />},
      { path: "/Config", exact: true,  element: <Config />}
    ],
  },
  { path: "/Access",
   exact: true,
   element: <Access />,
  }
];



export default detailtRoutes;
