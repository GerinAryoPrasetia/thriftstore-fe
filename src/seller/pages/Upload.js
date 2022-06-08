import React, { useState, useEffect } from "react";

import Sidebard from "seller/components/Sidebard";

const Upload = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [size, setSize] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [open, setOpen] = useState(false);
  const [sellerId, setSellerId] = useState("");

  useEffect(() => {
    setSellerId(localStorage.getItem("id_seller"));
  }, []);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(selectedImage);
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("product_name", name);
    fd.append("price", price);
    fd.append("description", desc);
    fd.append("size", size);
    fd.append("image", selectedImage);
    try {
      let res = await fetch(
        `http://localhost:8000/api/seller/${sellerId}/product`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: fd,
        }
      );
      let resJson = await res.json();
      if (resJson.code === 201) {
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebard />
      <div className="flex flex-col w-full items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
        <div className="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
          <div className="mb-4">
            <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">
              Upload Product
            </h1>
          </div>

          <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
            <form>
              <div>
                <label
                  className="block text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Product Name
                </label>

                <input
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="email"
                  placeholder="ex : Jeans"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Price
                </label>

                <input
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="email"
                  placeholder="ex : 99000"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Size
                </label>

                <input
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="text"
                  name="Size"
                  placeholder="ex : S"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label
                  className="block text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows="4"
                  placeholder="write a short description about your product"
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label
                  className="block text-sm font-bold text-gray-700"
                  htmlFor="title"
                >
                  Image
                </label>

                <input
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  type="file"
                  name="image"
                  placeholder="Upload your image"
                  onChange={imageChange}
                />
              </div>

              <div className="flex items-center justify-start mt-4 gap-x-2">
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                >
                  Save
                </button>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
