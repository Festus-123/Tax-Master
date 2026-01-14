import { useContext } from "react";
import { formContext } from "../../context/formContext";

const TaxPreview = () => {
  const { individualResult, BusinessResult, OtherResult, PAYEResult, VATResult, WHTResult } =
    useContext(formContext);

  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-10 lg:mt-0  bg-white rounded-md lg:p-8 gap-10">
        <img
          src="/preview.jpg"
          alt="Preview illustrtions"
          className="w-[80%] md:w-[60%] lg:w-[40%]"
        />
        <h1 className="font-medium text-2xl">Tax Preview</h1>
        <h1 className="">Result for the the TotalTax for each Category:</h1>
        <p>Individual Result {individualResult ?? 0}</p>
        <p>Business Result {BusinessResult ?? 0}</p>
        <p>Others Result {OtherResult ?? 0}</p>
        <p>Pay As You Earn PAYE Result {PAYEResult ?? 0}</p>
        <p>Value Added Tax Result {VATResult ?? 0}</p>
        <p>WItholding Tax Result {WHTResult ?? 0}</p>
        <iframe src=""></iframe>
      </div>
    </div>
  );
};

export default TaxPreview;
