import "assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import NotFound from "pages/NotFound";

import Provider from "helpers/hooks/useGlobalContext";
import ProductDetails from "parts/Details/ProductDetails";
import Showcase from "pages/Showcase";
import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "seller/pages/Dashboard";
import Upload from "seller/pages/Upload";
import LoginSeller from "seller/pages/auth/Login";
import RegisterSeller from "seller/pages/auth/Register";
import Products from "seller/pages/Products";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories/:idc" component={Details} />
          <Route path="/products/:idp" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/showcase" component={Showcase} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* seller */}
          <Route path="/seller/dashboard" component={Dashboard} />
          <Route path="/seller/upload" component={Upload} />
          <Route path="/seller/login" component={LoginSeller} />
          <Route path="/seller/register" component={RegisterSeller} />
          <Route path="/seller/products" component={Products} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
