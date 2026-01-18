import { useContext, useEffect, useState } from "react";
import { formContext } from "../../context/formContext";
import { type ReceiptItem } from '../../services/taxCalculator';
import { useLocation } from "react-router-dom";


const Receipt = () => {
  const { receiptData } = useContext(formContext);
  const [remark, setRemak] = useState<string>("")
  const { state } = useLocation()
  const name = state?.name

  console.log("the is name", name);
  
  useEffect(() => {
    let remarks: string;
    if(receiptData.total <= 1000000){
        remarks = "Low Income Earner"
    }else if(receiptData.total <= 10000000){
        remarks = "Average Income Earner"
    }else if(receiptData.total <= 100_000_000){
        remarks = "Moderate Income Earners"
    }else if(receiptData.total > 100_000_000){
        remarks = "High Income Earners"
    }
    const made = () => setRemak(remarks)
    made();
    },[receiptData, setRemak])
    
    if (!receiptData) return null;

  return (
    <div className="relative w-full h-230 md:w-[80%] bg-white py-16 px-6 md:px-8 font-mono">
      {/* HEADER */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-2xl font-semibold">{receiptData.title}</h1>
        <p className="text-[#82868d] text-sm">Official Tax Receipt</p>
      </div>

      {/* TOTAL */}
      <div className="border-t mt-0 mb-6 pt-4 text-center">
        <p className="text-sm text-[#82868d]">Total Tax Payable</p>
        <h2 className="text-4xl font-bold">
          ₦{receiptData.total.toLocaleString()}
        </h2>
      </div>

      {/* ITEMS */}
      <div className="flex flex-col gap-1">
        {Array.isArray(receiptData.items) &&
          receiptData.items.map((item: ReceiptItem, index: number) => (
            <div
              key={index}
              className={`flex justify-between px-4 py-1 text-xs md:text-sm ${
                index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#f9fafb]"
              }`}
            >
              <span>{item.label}</span>
              <span>
                {typeof item.value === "number" && item.value > 100
                  ? `₦${item.value.toLocaleString()}`
                  : `${item.value}`}
              </span>
            </div>
          ))}
      </div>

          {/* Remark */}
        <div className="mt-10 bg-[#f9fafb] px-4 py-1 text-xs md:text-sm flex flex-col w-full gap-2 md:gap-1">
          <p className="flex gap-5">Holder Name: <span className="font-bold ">{name}</span> </p>
          <p className="flex gap-1 md:gap-5">Total Tax Summit: <span className="font-bold">Single Document</span></p>
          <p className="flex gap-5">Tax Approximation Status: <span className={`font-bold ${receiptData.total === 0 ? "text-red-500" : "text-green-500"}`}>{receiptData.total === 0 ? "Unapproved" : "Successful✅"} </span></p>
          <p className="flex gap-5">Tax Master's Remark: <span className="font-bold">{remark}</span></p>
        </div>

      {/* QR + WATERMARK */}
      <div className="mt-10 flex justify-between items-center">
        <img src="/Qr-code.png" className="w-20 opacity-70" />
        <p className="text-xs text-[#82868d]">Tax-Master © 2026</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <h1 className="text-8xl font-bold rotate-[-30deg]">Tax-Master</h1>
      </div>
    </div>
  );
};

export default Receipt;
