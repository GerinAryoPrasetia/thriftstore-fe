import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { cartReducer } from "./Reducer";

const Cart = createContext();

const initialState = {
  products: [],
  cart: [],
  user: {},
};

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("mounted");
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        let resJson = await res.json();
        console.log(resJson);
        if (resJson.status === "success") {
          dispatch({
            type: "INITIALIZE",
            payload: {
              ...initialState,
              products: resJson?.products,
            },
          });
        } else {
          console.log("NO DATA FOUND");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("mounted");
    const fetchUser = async () => {
      const userId = await localStorage.getItem("user_id");
      try {
        const res = await fetch(`http://localhost:8000/api/user/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        let resJson = await res.json();
        console.log(resJson);
        if (resJson.status === "success") {
          dispatch({
            type: "INITIALIZE_USER",
            payload: {
              ...initialState,
              user: resJson?.data,
            },
          });
        } else {
          console.log("NO DATA FOUND");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log("context", state);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
