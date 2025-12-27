import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import LandingPage from "./components/landing-page/LandingPage";
import TermsPolicies from "./components/terms-and-condition/TermsPolicies";
import Category from "./components/category/Category";
import Income from "./components/income/Income";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<LandingPage />}/>
          <Route path="terms-and-conditions" element={<TermsPolicies />}/>
          <Route path="category" element={<Category />}/>
          <Route path="income" element={<Income />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
