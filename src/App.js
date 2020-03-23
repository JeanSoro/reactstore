import React from "react";

//----ROUTER
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//---PAGES
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

// -----GLOBAL COMPONENTS
import Header from './components/Header';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route
          path="/products/:id"
          children={<ProductDetails></ProductDetails>}>
        </Route>
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}
