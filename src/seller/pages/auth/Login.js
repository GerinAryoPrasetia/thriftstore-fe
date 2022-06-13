import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSeller = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorLogin = () =>
    toast.error("Login Data Salah!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const successLogin = () => {
    toast.success("Login Berhasil", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/api/seller/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (resJson.code === 200) {
        localStorage.setItem("id_seller", resJson.data.id);
        localStorage.setItem("token_seller", resJson.token);
        successLogin();
        setTimeout(function () {
          //Start the timer
          history.push("/seller/dashboard"); //After 1 second, set render to true
        }, 1000);
      } else {
        errorLogin();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-row w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-300">Thrift</span>Store
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-300 mb-2">
                Sign In As a Seller
              </h2>
              <div className="border-2 w-10 border-blue-300 inline-block mb-2"></div>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-4 flex items-center">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center mt-3">
                <div className="bg-gray-100 w-64 p-4 flex items-center">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="border-2 border-none bg-blue-300 text-white rounded-full px-12 py-2 inline-block mt-4 font-semibold hover:bg-white hover:text-blue-300 hover:border-blue-300 hover:border-2"
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="w-2/5 bg-blue-300 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Shopping Made Fun With ThriftStore</p>
            <Link
              to="/seller/register"
              className="border-2 border-white rounded-full px-12 py-2 inline-block mt-4 font-semibold hover:bg-white hover:text-blue-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginSeller;
