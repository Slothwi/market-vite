import { NavLink } from "react-router-dom"
import { SquareUser,Home,Star,ArrowUpFromLine,BookText } from "lucide-react";


export default function Sidebar({ children}) {



    return (
        <>
            <aside className="sidebar">
                <nav className="routesb">
                    <div className="container"><NavLink to="/"><Home/>Home</NavLink></div>
                    <hr />
                    <div className="container"><NavLink to="/Favs"><Star />Favoritos</NavLink></div>
                    <hr />
                    <div className="container"><NavLink to="/ventas"><BookText />Mis Publicaciones</NavLink></div>
                    <hr />
                    <div className="container"><NavLink to="/Publicar"><ArrowUpFromLine />Publicar Producto</NavLink></div>
                    <hr />
                    <div className="container"><NavLink to="/Profile"><SquareUser/> Mi Perfil</NavLink></div>
                </nav>
            </aside>
        </>
    )
}