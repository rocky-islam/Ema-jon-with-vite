import '../Header/Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div className='menu'>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;