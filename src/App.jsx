import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from './Components/Navbar'
import Home from './Views/Home'
import Sidebar from './Components/Sidebar'
import Access from './Views/Access'
import Cart from './Views/Cart'
import Favs from './Views/Favoritos'
import Profile from './Views/Profile'
import Publicar from './Views/Publicar'
import Registro from './Views/registro'
import Ventas from './Views/Ventas'
import Historial from './Views/Historial'



function App() {


  return (
    <div className='App'>
      <BrowserRouter>
          <div className='App'>
          <Nav/>
          <Sidebar/>
          </div>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='Access' element={ <Access /> }/>
          <Route path='Registro' element={ <Registro />}/>
          <Route path='Cart' element={ <Cart /> }/>
          <Route path='Favs' element={ <Favs /> }/>
          <Route path='Profile' element={ <Profile /> }/>
          <Route path='Publicar' element={ <Publicar /> }/>
          <Route path='Ventas' element={<Ventas />}/>
          <Route path='Historial' element={<Historial />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
