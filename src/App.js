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
import ProductsPage from './pages/ProductsPage';

// -----GLOBAL COMPONENTS
import Header from './components/Header';
import Alert from './components/Alert';
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <Router>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />

        <PrivateRoute path="/checkout">
          <Checkout />
        </PrivateRoute>

        <Route path="/login" component={Login} />
        <Route exact path="/products" component={ProductsPage} />
        <Route
          path="/products/:id"
          children={<ProductDetails></ProductDetails>}>
        </Route>
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}
