import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Sidebard from "seller/components/Sidebard";

const Dashboard = () => {
  const [isAuthSeller, setIsAuthSeller] = useState(true);
  useEffect(() => {
    const idSeller = localStorage.getItem("id_seller");
    if (idSeller === null) {
      setIsAuthSeller(false);
    }
  }, []);

  if (isAuthSeller === false) {
    return <Redirect to="/seller/login" />;
  }
  return (
    <div className="flex flex-row h-full">
      <Sidebard />
    </div>
  );
};

export default Dashboard;
