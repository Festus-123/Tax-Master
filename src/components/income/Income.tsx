import Individual from "../income-requirements/Individual";
import EmployerPAYE from "../income-requirements/Employer";
import Business from "../income-requirements/Business";
import Other from "../income-requirements/Other";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { formContext } from "../../context/formContext";

const Income = () => {
  const { result } = useContext(formContext);
  const { state } = useLocation();
  const selected = state?.selected;
  // const firstName = state?.name || "";
  const [requirement, setRequirements] = useState<string[]>([]);
  const [showAll, setShowAl] = useState<boolean>(false)

  // Whenever selected changes, update the requirements
  useEffect(() => {
    const newRequirements: string[] = [];

    selected.forEach((item: string) => {
      if (item === "Individual") {
        newRequirements.push(
          "Rent (if any): Rent is included to calculate rent relief",
          "Life insurance (Premium) Optional: Only premiums paid for life assurance policies covering the taxpayer or spouse are eligible for tax relief, subject to verification under the 2026 Nigeria Tax Act and FIRS guidelines."
        );
      } else if (item === "Employer(PAYE)") {
        newRequirements.push(
          "Employee Pension Contribution (Optional) – A portion of the employee’s salary set aside for their retirement, reducing taxable income.",
          "NHF Contribution (Optional) – A mandatory contribution to the National Housing Fund that helps employees access affordable housing.",
          "Other Statutory Reliefs (Optional) – Any additional legal deductions that lower the employee’s taxable income, like social security or union dues."
        );
      } else if (item === "Business") {
        newRequirements.push(
          "Allowable Business Expenses – Costs your business incurs in running daily operations, recognized by tax law, reducing taxable profit.",
          "Capital Allowances (Optional) – Deduction for business assets like machinery or equipment, reducing taxable profit.",
          "Loss Brought Forward (Optional) – Losses from previous years carried forward to offset current year profits, lowering tax liability."
        );
      } else if (item === "Other") {
        newRequirements.push(
          "Rent (if any): Rent is included to calculate rent relief",
          "Allowable Expenses: Costs that are deductible in tax payabke profits such as NHS, LHS pension and so on"
        )
      }
    });

    const made = () => setRequirements(newRequirements);
    made();
  }, [selected]);

  const visibeRequirements = showAll 
      ? requirement
      : requirement.slice(0, 2)

  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-10 lg:mt-0  bg-white rounded-md lg:p-8 gap-10">
        <img
          src="/gross-income.jpeg"
          alt="gross income illustration"
          className="w-[80%] md:w-[60%] lg:w-[40%]"
        />
        <h1 className="font-medium text-2xl">what is your Income ?</h1>
        <div>
          {selected.map((item: string) => {
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
              <span onClick={() => setShowAl(!showAll)} className="text-blue-600 cursor-pointer hover:text-blue-500">{showAll ? "Hide" : "...See more"}</span>
            )}
          </div>
        </div>
        <button onClick={() => console.log(result)} className="bg-blue-700 hover:bg-blue-500  text-white text-center p-2 md:p-3 lg:p-4 rounded-md w-full cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Income;
