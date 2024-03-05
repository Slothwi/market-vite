import { NavLink } from "react-router-dom"
import { Home, Star, ArrowUpFromLine, BookText } from "lucide-react";

const Sidebar = () => {
    return (
        <>
            <aside className="sidebar">
                <NavLink to="home"><Home />Home</NavLink>
                <hr />
                <NavLink to="favs"><Star />Favoritos</NavLink>
                <hr />
                <NavLink to="mypublications"><BookText />Mis Publicaciones</NavLink>
                <hr />
                <NavLink to="publish"><ArrowUpFromLine />Publicar Producto</NavLink>
            </aside>
        </>
    )
}
export default Sidebar;
