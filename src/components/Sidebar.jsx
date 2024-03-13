import { NavLink } from "react-router-dom"
import { Home, Star, ArrowUpFromLine, BookText } from "lucide-react";

const Sidebar = () => {
    return (
        <>
            <aside className="sidebar">
                <NavLink to="home" className="nav_menu"><Home />Home</NavLink>
                <hr />
                <NavLink to="favs" className="nav_menu"><Star />Favoritos</NavLink>
                <hr />
                <NavLink to="mypublications" className="nav_menu"><BookText />Mis Publicaciones</NavLink>
                <hr />
                <NavLink to="publish" className="nav_menu"><ArrowUpFromLine />Publicar Producto</NavLink>
            </aside>
        </>
    )
}
export default Sidebar;
