import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebard from "seller/components/Sidebard";

const Upload = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [size, setSize] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [open, setOpen] = useState(false);
  const [sellerId, setSellerId] = useState("");

  const successUpload = () => {
    toast.success("Upload Berhasil", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
      if (resJson.message === "Product Saved") {
        setOpen(true);
        successUpload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebard />
      <div>
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
      </div>
      <div className="flex flex-col w-full items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
        <div className="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
          <div className="mb-4">
            <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">
              Upload Product
            </h1>
          </div>

          <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
            <div>
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
                  onChange={(e) => setSize(e.target.value)}
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
                  onClick={handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Save
                </button>
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
