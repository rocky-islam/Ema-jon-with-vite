import './Cart.css'

const Cart = (props) => {
    // let cart = props.cart;
    const {cart} = props;
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for (let product of cart){
        // console.log(price.price);
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping +product.shipping;
    }
    const tax = (totalPrice*7/100);
    const grantTotal = (totalPrice + totalShipping + tax).toFixed(2)
    return (
        <div className='cart'>
            <div className='cart-details'>
            <h2>Order summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grantTotal}</h6>
            </div>
        </div>
    );
};

export default Cart;