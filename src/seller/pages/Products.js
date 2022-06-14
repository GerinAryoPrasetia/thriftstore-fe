import useAsync from "helpers/hooks/useAsync";
import React, { useEffect, useState } from "react";
import ProductList from "seller/components/ProductList";
import Sidebard from "seller/components/Sidebard";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const value = await localStorage.getItem("id_seller");
    try {
      let res = await fetch(
        `http://localhost:8000/api/seller/${value}/product`
      );
      let resJson = await res.json();
      if (resJson.message === "Success") {
        setProduct(resJson.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-row">
      <Sidebard />
      <div className="container mt-10 ml-8  mr-20">
        <div class="flex flex-row justify-between">
          <h3 className="font-bold text-3xl mb-3">Your Products</h3>
          <Link
            to="/seller/upload"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            + Add New
          </Link>
        </div>

        <table className="w-full border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="bg-gray-300 border border-slate-600">
                Product Name
              </th>
              <th className="bg-gray-300 border border-slate-600">Price</th>
              <th className="bg-gray-300 border border-slate-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((data, idx) => {
              return <ProductList data={data} key={data.id} idx={idx} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
