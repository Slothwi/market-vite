import { NavLink } from "react-router-dom"
import { SquareUser } from "lucide-react";

export default function Sidebar({ children}) {
const logo = "https://us.123rf.com/450wm/butenkov/butenkov2103/butenkov210300044/180573886-logotipo-vectorial-de-piezas-de-autom%C3%B3viles.jpg?ver=6"



    return (
        <>
            <aside className="sidebar">
                <nav className="routesb">
                    <div><NavLink to="/">Home</NavLink></div>
                    <hr></hr>
                    <div><NavLink to="/ventas">Mis Publicaciones</NavLink></div>
                    <hr></hr>
                    <div><NavLink to="/Favs">Favoritos</NavLink></div>
                    <hr></hr>
                    <div><NavLink to="/">Home</NavLink></div>
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