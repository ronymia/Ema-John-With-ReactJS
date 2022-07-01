import {
    useState,
    useEffect
} from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToLocalStorageDB } from '../../utilities/localStorageDB';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(0);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/pageCount`)
            .then(res => res.json())
            .then(data => {
                const count = data.productCount;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${pageSize}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, pageSize]);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const existsProducts = cart.find(product => product._id === selectedProduct._id);
        if (!existsProducts) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const restProduct = cart.filter(product => product._id !== selectedProduct._id);
            existsProducts.quantity = existsProducts.quantity + 1
            newCart = [...restProduct, existsProducts];
        }
        // const newCart = [...cart, selectedProduct]
        setCart(newCart);
        addToLocalStorageDB(selectedProduct._id);
    };

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? "select" : ""}
                                onClick={() => setPage(number)}
                            >{number}</button>)
                    }
                    {
                        <select
                            onChange={e => setPageSize(e.target.value)}
                            name="" id="">
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    }
                </div>
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