import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import CartLink from '../components/Cart/CartLink';
import { UserContext } from '../context/user';
import LoginLink from '../components/LoginLink';

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <img src={logo} alt="logo-official" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {user.token && <li>
              <Link to="/checkout">Checkout</Link>
            </li>}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;