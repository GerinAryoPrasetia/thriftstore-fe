import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useGlobalContext } from "helpers/hooks/useGlobalContext";
import "helpers/format/currency";
import { CartState } from "context/Context";

export default function ShoppingCart() {
  const [total, setTotal] = useState();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    if (cart.length > 0) {
      setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }
  }, [cart]);

  console.log(total);

  return (
    <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
      <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
        <h3 className="text-2xl">Shopping Cart</h3>
      </div>

      <div className="border-b border-gray-200 mb-4 hidden md:block">
        <div className="flex flex-start items-center pb-2 -mx-4">
          <div className="px-4 flex-none">
            <div className="" style={{ width: 90 }}>
              <h6>Photo</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">
              <h6>Product</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">
              <h6>Price</h6>
            </div>
          </div>
          <div className="px-4 w-2/12">
            <div className="text-center">
              <h6>Action</h6>
            </div>
          </div>
        </div>
      </div>

      {cart.length === 0 ? (
        <p id="cart-empty" className="text-center py-8">
          Ooops... Cart is empty{" "}
          <Link to="/" className="underline">
            Shop Now
          </Link>
        </p>
      ) : (
        cart?.map((item, idx) => {
          return (
            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              key={idx}
            >
              <div className="px-4 flex-none">
                <div className="" style={{ width: 90, height: 90 }}>
                  <img
                    className="object-cover rounded-xl w-full h-full"
                    src={`http://localhost:8000/storage/images/${item.image}`}
                  />
                </div>
              </div>
              <div className="px-4 w-auto flex-1 md:w-5/12">
                <div className="">
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    {item.product_name}
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                <div className="">
                  <h6 className="font-semibold text-lg">Rp {item.price}</h6>
                </div>
              </div>
              <div className="px-4 w-2/12">
                <div className="text-center">
                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                    }
                    className="text-red-600 border-none focus:outline-none px-3 py-1"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
      <div>
        <div>
          <hr className="mb-6" />
          <span className="font-bold">Sub Total : </span>
          <span>
            Rp {total} (@{cart.length} items)
          </span>
        </div>
      </div>
    </div>
  );
}
