import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-[#8080801c] h-full">
      <Navbar />
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
