import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import PropTypes from 'prop-types';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {name, img, price, seller, stock, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img ? img : 'No Image Found'} alt="Image Not available" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Stock: {stock}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button 
            className='cart-btn' 
            onClick={() => handleAddToCart(props.product)}
            >Add To Cart
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;