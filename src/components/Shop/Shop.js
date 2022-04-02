import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToLocalStorageDB } from '../../utilities/localStorageDB';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    // Load data && import useProduct from hooks
    const [products, setProducts] = useProducts();

    // add to Cart list and  get data from local storage DB also useCart import form hooks
    const [cart, setCart] = useCart(products);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const existsProducts = cart.find(product => product.id === selectedProduct.id);
        if (!existsProducts) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const restProduct = cart.filter(product => product.id !== selectedProduct.id);
            existsProducts.quantity = existsProducts.quantity + 1
            newCart = [...restProduct, existsProducts];
        }
        // const newCart = [...cart, selectedProduct]
        setCart(newCart);
        addToLocalStorageDB(selectedProduct.id);
    };

    const navigate = useNavigate()

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container-bg">
                <Cart cart={cart}>

                    <button onClick={() => { navigate('/orders') }} className="review-btn">Review Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;