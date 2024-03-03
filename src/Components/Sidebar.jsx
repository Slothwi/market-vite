import { NavLink } from "react-router-dom"
import { Home, Star, ArrowUpFromLine, BookText } from "lucide-react";

export default function Sidebar() {

    return (
        <>
            <aside className="sidebar">
                <NavLink to="home"><Home />Home</NavLink>
                <hr />
                <NavLink to="favs"><Star />Favoritos</NavLink>
                <hr />
                <NavLink to="ventas"><BookText />Mis Publicaciones</NavLink>
                <hr />
                <NavLink to="publicar"><ArrowUpFromLine />Publicar Producto</NavLink>
            </aside>
        </>
    )
}