import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { category } from "../../data/data";
import { FaXmark } from "react-icons/fa6";

const Category = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState<string[]>([]);
  const [data, setData] = useState<string[]>(category);
  const [value, setValue] = useState <string>("")

  const handleSelection = (item: string) => {
    setSelect((prev) => [...prev, item]);
    setData((prev) => prev.filter((i) => i !== item));
  };
  const handleRemoveSelection = (item: string) => {
    setData((prev) => [...prev, item]);
    setSelect((prev) => prev.filter((i) => i !== item));
  };

  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-5 lg:mt-0  bg-white rounded-md lg:p-8 gap-10">
        <img
          src="/category-illustrations.jpeg"
          alt="category-illustrations"
          className="w-[80%] md:w-[60%] lg:w-[50%] animate-pulse"
        />
        <h1 className="font-medium text-2xl lg:text-2xl ">
          What Category are you?
        </h1>
        <p className="font-medium">Categories</p>
        <div className="flex flex-row items-center flex-wrap gap-5 border-b border-[#8080807c] py-2 lg:py-3">
          {data.length === 0 ? (
            <p>All options selected</p>
          ) : (
            data.map((char, i) => (
              <div
                key={i}
                onClick={() => handleSelection(char)}
                className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center cursor-pointer gap-5 hover:bg-[#80808010]"
              >
                {char}
              </div>
            ))
          )}
        </div>
        <p className="font-medium">Selected categories</p>
        <div className="flex flex-row items-center flex-wrap gap-5 border-b border-[#8080807c] py-2 lg:py-3">
          {select.length === 0 ? (
            <p>No options selected</p>
          ) : (
            select.map((char, i) => (
              <div
                key={i}
                onClick={() => handleRemoveSelection(char)}
                className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center cursor-pointer gap-5 bg-[#80808037]"
              >
                {char} <FaXmark />
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col gap-5">
          <label className="font-medium text-md text-lg">Your Name</label>
          <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
            placeholder="First Name"
            type="text"
            className="border-b outline-none p-2 lg:p-3"
          />
        </div>
        <p className="text-red-600">
          Note Name details is required to draft a clear and concise document
          redressing the User tax-payable profit and tax to be/or paid
        </p>

        <button
          onClick={() => {
            if (select.length > 0 && value !== "") {
              navigate("/income", {
                state: { selected: select, name: value },
              }, );
            } else {
              window.alert("invalid selection or input");
            }
          }}
          className="bg-blue-700 hover:bg-blue-500  text-white text-center p-2 md:p-3 lg:p-4 rounded-md w-full cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Category;
