import React from "react";
import Footer from "../../comp/footer/Index";
import NavBar from "../../comp/navbar/Index";

const Layoute = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layoute;
