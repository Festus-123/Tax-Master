// import { useEffect, useState } from "react";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { formContext } from "../../context/formContext";
import Input from "../input/Input";
import { businessVAT, type VATRules } from "../../services/taxCalculator";

const VAT = () => {
  const { setReceiptData } = useContext(formContext)
  const { state } = useLocation();
  const businessOption = state?.businessOption
  // console.log("this is businessOption", businessOption)
  const [isInclusive, setInclusive] = useState<boolean>(false);
  const [isExclusive, setExclusive] = useState<boolean>(false);
  const [formData, setFOrmData] = useState<VATRules>({
    grossPrice: 0,
    rate: 0,
  });

  useEffect(() => {
    const {receiptData} = businessVAT(formData, {
      isVAT: businessOption === "VAT",
      isInclusive,
      isExclusive
    });
    setReceiptData(receiptData)
  }, [formData, setReceiptData, isInclusive, isExclusive, businessOption]);

  return (
    <div className="flex flex-col gap-8 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl">Value Added Tax (VAT)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Input
          title="Total Sales / Revenue"
          placeholder="10,000,000"
          // value={formData.grossPrice}
          onChange={(e) =>
            setFOrmData({ ...formData, grossPrice: Number(e.target.value) })
          }
        />

        <Input
          title="Total VAT able Purchases (in %)"    
          placeholder="4.5"
        //   value={formData.rate}
          onChange={(e) =>
            setFOrmData({ ...formData, rate: Number(e.target.value) })
          }
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-md md:text-lg">Select VAT Type</h1>
        <div className="flex flex-row gap-10 items-center">
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <input
              checked={isInclusive}
              type="checkbox"
              id="inclusive"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInclusive(e.target.checked)
                setExclusive(!e.target.checked)
              }}
            />
            <label htmlFor="inclusive" className="cursor-pointer">Inclusive</label>
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="exclusive"
              checked={isExclusive}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setExclusive(e.target.checked)
                setInclusive(!e.target.checked)
              }}
            />
            <label htmlFor="exclusive" className="cursor-pointer">Exclusive</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VAT;
