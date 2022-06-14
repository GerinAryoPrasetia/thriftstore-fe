import React, { useEffect, useRef } from "react";
import useAsync from "helpers/hooks/useAsync";
import { Link } from "react-router-dom";
import fetch from "helpers/fetch";
import "helpers/format/currency";
import { CartState } from "context/Context";

function Loading() {
  return Array(4)
    .fill()
    .map((_, index) => {
      return (
        <div className="px-4 relative card group" key={index}>
          <div
            className="rounded-xl bg-gray-300 overflow-hidden card-shadow relative"
            style={{ width: 287, height: 386 }}
          ></div>
          <div className="w-24 h-3 bg-gray-300 mt-3 rounded-full"></div>
          <div className="w-36 h-3 bg-gray-300 mt-2 rounded-full"></div>
        </div>
      );
    });
}

const ProductList = () => {
  const { data, error, run, isLoading } = useAsync();
  const { state } = CartState();
  console.log(state);

  // const refContainer = useRef(null);
  // useEffect(() => {
  //   run(fetch({ url: "/api/products" }));
  // }, [run]);
  return (
    <section className="mt-10 container ml-10 mr-10">
      <div className=" m-auto">
        <h2 className="font-bold text-3xl mb-4">All Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {state.products?.map((prod) => {
            return (
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <img
                    class="rounded-t-lg w-full object-cover"
                    style={{ height: "300px" }}
                    src={`http://localhost:8000/storage/images/${prod.image}`}
                    alt=""
                  />
                </Link>
                <div class="p-5">
                  <Link href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {prod.product_name}
                    </h5>
                  </Link>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-bold">
                    Rp {prod.price}
                  </p>
                  <Link
                    to={`/products/${prod.id}`}
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Detail
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* {isLoading ? (
        <div
          className="flex -mx-4 flex-rm,ow relative"
          style={{
            paddingLeft:
              refContainer.current?.getBoundingClientRect?.()?.left - 16 || 0,
          }}
        >
          <Loading />
        </div>
      ) : error ? (
        JSON.stringify(error)
      ) : data.products.length === 0 ? (
        "No Product Found"
      ) : (
        <div className="grid grid-cols-4 gap-4">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {products.product_name}
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <Link
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default ProductList;
