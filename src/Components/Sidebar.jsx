import { NavLink } from "react-router-dom"
import { SquareUser } from "lucide-react";


export default function Sidebar({ children}) {



    return (
        <>
            <aside className="sidebar">
                <nav className="routesb">
                    <div><NavLink to="/">Home</NavLink></div>
                    <hr></hr>
                    <div><NavLink to="/Favs">Favoritos</NavLink></div>
                    <hr></hr>
                    <div><NavLink to="/ventas">Mis Publicaciones</NavLink></div>
                    <hr></hr>
                    <div><NavLink to="/Publicar">Publicar Producto</NavLink></div>
                </nav>
                <nav className="profile">
                    <div><NavLink to="/Profile">
                            <SquareUser/> Mi Perfil
                        </NavLink>
                    </div>
                </nav>
            </aside>
        </>
    )
}