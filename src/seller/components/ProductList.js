import React from "react";

const ProductList = ({ data, idx }) => {
  return (
    <tr className="bg-gray-100">
      <td className="p-4 border border-slate-700">
        <span className="font-bold">{data.product_name}</span>
      </td>
      <td className="border border-slate-700 p-4">{data.price}</td>
      <td className="border border-slate-700 p-4">
        <div className="flex flex-row">
          <button className="mr-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Edit
          </button>
          <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductList;
