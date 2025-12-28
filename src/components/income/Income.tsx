import Individual from "../income-requirements/Individual";
import EmployerPAYE from "../income-requirements/Employer";
import Business from "../income-requirements/Business";
import Other from "../income-requirements/Other";
import { useLocation } from "react-router-dom";

const Income = () => {
  const { state } = useLocation();
  const selected = state?.selected || [];
  const firstName = state?.name || ""
  console.log(firstName.split(" ")[0])
  console.log(selected)

  return (
    <div className="w-full lg:w-[80%] flex items-center justify-center p-4 lg:p-8 ">
      <div className=" w-full flex flex-col p-4 mt-10 lg:mt-0  bg-white rounded-md lg:p-8 gap-10">
        <img src="/gross-income.jpeg" alt="gross income illustration" className="w-[80%] md:w-[60%] lg:w-[40%]"/>
        <h1 className="font-medium text-2xl">what is your Income ?</h1>
        {selected.map((item: string) => {
          if(item === "Individual"){
            return (<Individual />)
          }else if(item === "Employer(PAYE)"){
            return (<EmployerPAYE />)
          }else if(item === "Business"){
            return (<Business />)
          }else if(item === "Other"){
            return <Other />
          }
        })}
      </div>
    </div>
  );
};

export default Income;
