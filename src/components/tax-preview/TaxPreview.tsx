import { FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import Receipt from "../reciept/Receipt";

const TaxPreview = () => {
  const receiptRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!receiptRef.current) return;

    // capture the receipt as canvas
    const canvas = await html2canvas(receiptRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // create a PDF
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`Tax-master.pdf`);
  };


  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-10 lg:mt-0  bg-white rounded-md lg:p-8 gap-10">
        <img
          src="/preview.jpg"
          alt="Preview illustrtions"
          className="w-[40%] md:w-[20%] lg:w-[10%]"
        />
        <h1 className="font-medium text-2xl">Tax Preview</h1>

        <div ref={receiptRef} className="w-full flex flex-col items-center justify-center bg-[#80808010] py-4 overflow-y-scroll">
          <Receipt />
        </div>

        <button
          onClick={handleDownloadPDF}
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
