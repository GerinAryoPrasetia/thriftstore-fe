import Header from "parts/Header";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ShippingOverview = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <div className="shadow-md container w-2/3 m-auto p-6">
        <div>
          <h2 className="font-bold text-2xl text-center mb-3">
            Checkout Overview
          </h2>
        </div>
        <p>
          <span className="font-bold">Full Name :</span> {location.state.name}
        </p>
        <p>
          <span className="font-bold">Address :</span> {location.state.address}
        </p>
        <p>
          <span className="font-bold">Email : </span> {location.state.email}
        </p>
        <p>
          <span className="font-bold">Total :</span> Rp {location.state.total}
        </p>
        <div class="flex flex-row">
          <p>
            <span className="font-bold">Select Payment Method :</span>
          </p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="inlineRadio10"
            >
              BANK BCA (Rek : <span className="font-bold">28319909</span>)
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="inlineRadio20"
            >
              BANK MANDIRI (Rek : <span className="font-bold">12981290</span>)
            </label>
          </div>
        </div>
        <h3 className="font-bold mb-1">Upload Bukti Pembayaran : </h3>
        <input
          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
        <div className="flex flex-row">
          <button
            className=" text-black hover:bg-black  rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200 mr-4"
            style={{ backgroundColor: "#75ACC0", color: "white" }}
          >
            Pay Now
          </button>
          <Link
            to="/"
            className=" text-black hover:bg-black bg-white rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200 mr-4"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingOverview;
