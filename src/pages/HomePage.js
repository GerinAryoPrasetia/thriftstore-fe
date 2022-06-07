import React from "react";

import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

import Document from "parts/Document";
import Products from "parts/HomePage/Products";

export default function HomePage() {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      {/* <BrowseRoom /> */}
      {/* <JustArrived /> */}
      {/* <Clients /> */}
      <Products />
      <Sitemap />
      <Footer />
    </Document>
  );
}
