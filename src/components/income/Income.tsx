import Individual from "../income-requirements/Individual";
import EmployerPAYE from "../income-requirements/Employer";
import Business from "../income-requirements/Business";
import Other from "../income-requirements/Other";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { requirementRules } from "../requirements/requirement";

const Income = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const selected = state?.selected;
  // const firstName = state?.name || "";
  const [requirement, setRequirements] = useState<string[]>([]);
  const [showAll, setShowAl] = useState<boolean>(false);

  // Whenever selected changes, update the requirements
  
  useEffect(() => {
    const made = () => setRequirements(requirementRules(selected));
    made();
  }, [selected]);

  const visibeRequirements = showAll ? requirement : requirement.slice(0, 2);

  return (
    <div className="w-full md:w-[90%] lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-10 lg:mt-0  bg-white rounded-md lg:p-8 gap-10">
        <img
          src="/gross-income.jpeg"
          alt="gross income illustration"
          className="w-[80%] md:w-[60%] lg:w-[40%]"
        />
        <h1 className="font-medium text-2xl">what is your Income ?</h1>
        <div>
          {[...selected].sort().map((item: string) => {
            if (item === "Individual") {
              return <Individual />;
            } else if (item === "Employer(PAYE)") {
              return <EmployerPAYE />;
            } else if (item === "Business") {
              return <Business />;
            } else if (item === "Other") {
              return <Other />;
            }
          })}
        </div>

        <div className="p-2 lg:p-4 ">
          {visibeRequirements.map((char, i) => (
            <div key={i} className="gap-2 py-1">
              <li className="text-red-600 font-medium">{char}</li>
            </div>
          ))}
          <div>
            {requirement.length > 2 && (
              <span
                onClick={() => setShowAl(!showAll)}
                className="text-blue-600 cursor-pointer hover:text-blue-500"
              >
                {showAll ? "Hide" : "...See more"}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => navigate("/preview")}
          className="bg-blue-700 hover:bg-blue-500  text-white text-center p-2 md:p-3 lg:p-4 rounded-md w-full cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Income;
