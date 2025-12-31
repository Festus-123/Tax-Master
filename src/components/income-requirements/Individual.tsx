import {  useState } from "react";
import { useLocation } from "react-router-dom";
// import { formContext } from "../../context/formContext";
import Input from "../input/Input";
import {
  // IndividualTax,
  type indvidualRues,
} from "../../services/taxCalculator";

const Individual = () => {
  // const {setResult} = useContext(formContext)
  const { state } = useLocation();
  const option = state?.option;
  console.log(option);

  const [formData, setFormData] = useState<indvidualRues>({
    grossIncome: 0,
    basicSalary: 0,
    rent: 0,
    LIP: 0,
    pension: 8,
    NHF: 2.5
  });

  // useEffect(() => {
  //   const made = () => IndividualTax(formData, 40);
  //   made();
  //   console.log(made());
  // }, [formData]);

  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl ">Individual</h1>
      <div className="flex flex-wrap items-center gap-10">
        <Input
          value={formData.grossIncome}
          onChnage={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, grossIncome: Number(e.target.value) })
          }
          placeholder={"840,000"}
          title={"Annual Gross Income"}
        />

        {option === "Salary earner" && (
          <Input
            title={"Basic Salary"}
            value={formData.basicSalary}
            onChnage={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, basicSalary: Number(e.target.value) })
            }
            placeholder={"600,000"}
          />
        )}

        <Input
          value={formData.rent}
          onChnage={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, rent: Number(e.target.value) })
          }
          placeholder={"200,000"}
          title={"Rent (if any) Optional"}
        />

        <Input
          value={formData.LIP}
          onChnage={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, LIP: Number(e.target.value) })
          }
          placeholder={"--- ---"}
          title={"Life insurance (premium) Optional"}
        />
        {option !== "Salary earner" && (
          <div className="flex flex-wrap items-center gap-10">
        <Input
          value={formData.pension}
          onChnage={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, pension: Number(e.target.value) })
          }
          placeholder={"8"}
          title={"Pension (in %) Optional"}
          />
        <Input
          value={formData.NHF}
          onChnage={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, NHF: Number(e.target.value) })
          }
          placeholder={"2.5"}
          title={"NHF (in %) Optional"}
          />
          </div>
        )}
      </div>

        {option === "Salary earner" && (
          <div className="flex flex-col gap-10 ">
            <h1 className="text-md">Select if you contribute to any:</h1>
            <div className="flex flex-row items-center gap-10 ">
              <div className="flex flex-row itemms-center gap-2 ">
                <input id="pension" type="checkbox" />
                <label htmlFor="pension" className="cursor-pointer">
                  Pension
                </label>
              </div>
              <div className="flex flex-row itemms-center gap-2">
                <input id="NHF" type="checkbox" className="" />
                <label htmlFor="NHF" className="cursor-pointer">
                  NHF
                </label>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Individual;
