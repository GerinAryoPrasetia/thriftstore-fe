import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import useAsync from "helpers/hooks/useAsync";
import useForm from "helpers/hooks/useForm";
import fetch from "helpers/fetch";
import { useGlobalContext } from "helpers/hooks/useGlobalContext";
import { CartState } from "context/Context";

export default function ShippingDetails() {
  const history = useHistory();
  const { data, run, isLoading } = useAsync();
  const { state, dispatch } = useGlobalContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const {
    state: { cart },
  } = CartState();

  const { state: payload, fnUpdateState } = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    courier: "",
    payment: "",
  });

  console.log(payload);
  // console.log(user);

  const handleSubmit = () => {};

  // React.useEffect(() => {
  //   run(fetch({ url: `/api/checkout/meta` }));
  // }, [run]);

  async function fnSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch({
        url: `/api/checkout`,
        method: "POST",
        body: JSON.stringify({
          ...payload,
          cart: Object.keys(state.cart).map((key) => state.cart[key]),
        }),
      });

      if (res) {
        history.push("/congratulation");
        dispatch({
          type: "RESET_CART",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
      <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
        <form onSubmit={fnSubmit}>
          <div className="flex flex-start mb-6">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="completeName" className="text-sm mb-2">
              Complete Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="completeName"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Full Name"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="emailAddress" className="text-sm mb-2">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="emailAddress"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Email Address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="text-sm mb-2">
              Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="address"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber" className="text-sm mb-2">
              Phone Number
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              name="phoneNumber"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your phone number"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6"
            >
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
