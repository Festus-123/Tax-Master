import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import LandingPage from "./components/landing-page/LandingPage";
import TermsPolicies from "./components/terms-and-condition/TermsPolicies";
import Category from "./components/category/Category";
import Income from "./components/income/Income";

// import a global state mangement system to manage data
import {formContext} from "./context/formContext";

export default function App() {
  const [result, setResult] = useState<number | null>(null)
  return (
    <formContext.Provider value={{
      result,
      setResult,
    }}>
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
    </formContext.Provider>
  );
}
