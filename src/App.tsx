import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import LandingPage from "./components/landing-page/LandingPage";
import TermsPolicies from "./components/terms-and-condition/TermsPolicies";
import Category from "./components/category/Category";
import Income from "./components/income/Income";
import TaxPreview from "./components/tax-preview/TaxPreview";

// import a global state mangement system to manage data
import { formContext } from "./context/formContext";

export default function App() {
  const [individualResult, setIndividualResult] = useState<number | null>(null);
  const [PAYEResult, setPAYEResult] = useState<number | null>(null);
  const [BusinessResult, setBusinessResult] = useState<number | null>(null);
  const [VATResult, setVATResult] = useState<number | null>(null);
  const [WHTResult, setWHTResult] = useState<number | null>(null);
  const [OtherResult, setOtherResult] = useState<number | null>(null);

  return (
    <formContext.Provider
      value={{
        individualResult,
        setIndividualResult,
        PAYEResult,
        setPAYEResult,
        BusinessResult,
        setBusinessResult,
        VATResult,
        setVATResult,
        WHTResult,
        setWHTResult,
        OtherResult,
        setOtherResult,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<LandingPage />} />
            <Route path="terms-and-conditions" element={<TermsPolicies />} />
            <Route path="category" element={<Category />} />
            <Route path="income" element={<Income />} />
            <Route path="preview" element={<TaxPreview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </formContext.Provider>
  );
}
