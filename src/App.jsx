import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import detailtRoutes from "./routes/Router";
import { useRoutes } from "react-router-dom";
import ProductProvider from './Context/ProductContext'

function App() {
  const routing = useRoutes(detailtRoutes);

  return (
    <div>
      <ProductProvider>
        {routing}
      </ProductProvider>
    </div>
  )
}

export default App
