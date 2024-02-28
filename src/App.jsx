import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Themeroutes from "./routes/Router";
import { useRoutes } from "react-router-dom";
import MyContext from './Context/Context'

function App() {
  const routing = useRoutes(Themeroutes);
  
  return (
    <div>
      <MyContext.Provider>
      {routing}
      </MyContext.Provider>
    </div>
  )
}

export default App
