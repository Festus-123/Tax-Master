import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import LandingPage from "./components/landing-page/LandingPage";
import TermsPolicies from "./components/terms-and-condition/TermsPolicies";
import Category from "./components/category/Category";
import Income from "./components/income/Income";
import TaxPreview from "./components/tax-preview/TaxPreview";
import Reciept from "./components/reciept/reciept";

// import a global state mangement system to manage data
import { formContext } from "./context/formContext";
import { type ReceiptData } from "./services/taxCalculator";

export default function App() {
  const [receiptData, setReceiptData] = useState<ReceiptData>({
    title: "",
    items: [],
    total: 0
  });


  return (
    <formContext.Provider
      value={{
        receiptData,
        setReceiptData,
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
            <Route path="reciept" element={<Reciept />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </formContext.Provider>
  );
}
