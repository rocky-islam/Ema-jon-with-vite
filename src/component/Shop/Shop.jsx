import { useEffect } from 'react';
import './Shop.css'
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    // console.log(products);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        // console.log(product);
        let newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="card-container">
                {
                    products.map(product => <Product
                    product={product}
                    key={product.id}
                    handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="order-summery">
                <Cart
                cart ={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;