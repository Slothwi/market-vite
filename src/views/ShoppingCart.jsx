import { Row } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css'
import ShoppingSumary from '../components/ShoppingSumary';
import ShoppingList from '../components/ShoppingList';
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import ShoppingListEmpty from "../components/ShoppingListEmpty";

const ShoppingCart = () => {

    const { listShoppingCart } = useContext(ProductContext)

    return (
        <>
            {listShoppingCart.length > 0
                ?
                <Row className='d-flex flex-row'>
                    <ShoppingList />
                    <ShoppingSumary />
                </Row>
                :
                <ShoppingListEmpty />
            }
        </>
    );
};

export default ShoppingCart;