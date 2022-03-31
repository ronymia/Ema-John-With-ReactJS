const { useState, useEffect } = require("react")

const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        //load data from json
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return [products, setProducts]
}

export default useProducts