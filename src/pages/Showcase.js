import React from "react";
import Header from "parts/Header";
import Document from "parts/Document";
import ProductList from "parts/Showcase/ProductList";

const Showcase = () => {
  return (
    <Document>
      <Header theme="black" />
      <ProductList />
    </Document>
  );
};

export default Showcase;
