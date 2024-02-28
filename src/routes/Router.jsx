import Home from '../Views/Home'
import Access from '../Views/Access'
import Cart from '../Views/Cart'
import Favs from '../Views/Favoritos'
import Profile from '../Views/Profile'
import Publicar from '../Views/Publicar'
import Registro from '../Views/registro'
import Ventas from '../Views/Ventas'
import Historial from '../Views/Historial'
import MainPage from '../Components/MainPage'

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
      { path: "/Cart", exact: true, element: <Cart /> },
      { path: "/Favs", exact: true, element: <Favs /> },
      { path: "/Profile", exact: true, element: <Profile /> },
      { path: "/Publicar", exact: true,  element: <Publicar />},
      { path: "/Ventas", exact: true, element: <Ventas /> },
      { path: "/Historial", exact: true,  element: <Historial />}
    ],
  },
  // { path: "/login",
  //   exact: true,
  //   element: <Login />,
  // }
];



export default detailtRoutes;
