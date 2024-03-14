import { Row } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css'
import ShoppingSumary from '../components/ShoppingSumary';
import ShoppingList from '../components/ShoppingList';
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import ScreenEmpty from "../components/ScreenEmpty";
import { useState } from 'react';


const ShoppingCart = () => {

    const { listShoppingCart } = useContext(ProductContext)

    const [textTitle, ] = useState('Tu Carrito esta vacio')
    const [textMsg, ] = useState('¡Empieza un carrito de compras y suma productos! 🙏')
    const [newSearch, ] = useState('/shopping.png')
    
    return (
        <>
            {listShoppingCart.length > 0
                ?
                <Row className='d-flex flex-row'>
                    <ShoppingList />
                    <ShoppingSumary />
                </Row>                
                :  <ScreenEmpty imageSrc={newSearch} textTitle={textTitle} textMsg={textMsg} />    
            }
        </>
    );
};

export default ShoppingCart;