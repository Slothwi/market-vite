import { Link } from "react-router-dom"
import { SquareUser } from "lucide-react";
import { Home } from "lucide-react";
import { Star } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";

export default function Sidebar() {

 
    return (
        <>
            <aside className="sidebar">
                <nav className="routesb">
                    <div><Link to="/"><Home size={20} /> Home</Link></div>
                    <hr></hr>
                    <div><Link to="/Favs"><Star size={20} /> Favoritos</Link></div>
                    <hr></hr>
                    <div><Link to="/ventas"><ShoppingBasket size={20} /> Mis Publicaciones</Link></div>
                    <hr></hr>
                    <div><Link to="/Publicar"><BadgeDollarSign size={20} /> Publicar Producto</Link></div>
                </nav>
                <nav className="profileSidebar">
                    <div><Link to="/Profile">
                            <SquareUser/> Mi Perfil
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
    )
}