import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-row w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-300">Thrift</span>Store
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-300 mb-2">Sign In</h2>
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
                  />
                </div>
              </div>
              <a
                href="/register"
                className="border-2 border-none bg-blue-300 text-white rounded-full px-12 py-2 inline-block mt-4 font-semibold hover:bg-white hover:text-blue-300 hover:border-blue-300 hover:border-2"
              >
                Sign In
              </a>
            </div>
          </div>
          <div className="w-2/5 bg-blue-300 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-2">Shopping Made Fun With ThriftStore</p>
            <a
              href="/register"
              className="border-2 border-white rounded-full px-12 py-2 inline-block mt-4 font-semibold hover:bg-white hover:text-blue-300"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
