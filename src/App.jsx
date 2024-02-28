import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

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
