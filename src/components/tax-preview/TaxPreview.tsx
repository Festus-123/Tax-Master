import { FaDownload } from "react-icons/fa";
import { useRef } from "react";
import Receipt from "../reciept/Receipt";
import { toPng } from "html-to-image";
import toast from "react-hot-toast";

const TaxPreview = () => {
  const receiptRef = useRef<HTMLDivElement>(null);

const handleDownloadImage = async () => {
  if (!receiptRef.current) return;

  const dataUrl = await toPng(receiptRef.current, {
    cacheBust: true,
    pixelRatio: 2,
  });

  if(dataUrl) {
    toast.success("Download Successful✅")
  }

  const link = document.createElement("a");
  link.download = "Tax-master-receipt.png";
  link.href = dataUrl;
  link.click();
  // window.open(dataUrl, "_blank");

};

  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-10 lg:mt-0  bg-white rounded-md lg:p-8 gap-5 md:gap-10">
        <img
          src="/preview.jpg"
          alt="Preview illustrtions"
          className="w-[30%] md:w-[20%] lg:w-[10%] animate-pulse"
        />
        <h1 className="font-medium text-2xl">Tax Preview</h1>

        <div ref={receiptRef} className="w-full flex flex-col items-center justify-center bg-[#80808010] py-2 md:py-4 px-2">
          <Receipt />
        </div>

        <button
          onClick={handleDownloadImage}
          className="bg-blue-700 hover:bg-blue-500  text-white text-center p-2 md:p-3 lg:p-4 rounded-md w-full cursor-pointer flex flex-row items-center justify-center gap-5"
        >
          <div className="">
            <FaDownload />
          </div>
          Download
        </button>
      </div>
    </div>
  );
};

export default TaxPreview;
