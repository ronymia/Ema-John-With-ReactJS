import { useEffect, useState } from "react"
import { getLocalStoredCart } from "../utilities/localStorageDB";

const useCart = (products) => {

    const [cart, setCart] = useState([]);

    // get data from LocalStorage 
    useEffect(() => {
        const storedCart = getLocalStoredCart();
        let savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

        setCart(savedCart);
    }, [products]);

    return [cart, setCart];
}

export default useCart;