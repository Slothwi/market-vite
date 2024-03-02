import { NavLink } from "react-router-dom"
import { Home, Star, ArrowUpFromLine, BookText } from "lucide-react";

export default function Sidebar() {

    return (
        <>
            <aside className="sidebar">
                <NavLink to="/"><Home />Home</NavLink>
                <hr />
                <NavLink to="/Favs"><Star />Favoritos</NavLink>
                <hr />
                <NavLink to="/ventas"><BookText />Mis Publicaciones</NavLink>
                <hr />
                <NavLink to="/Publicar"><ArrowUpFromLine />Publicar Producto</NavLink>
            </aside>
        </>
    )
}