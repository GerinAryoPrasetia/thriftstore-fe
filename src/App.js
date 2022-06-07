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
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
