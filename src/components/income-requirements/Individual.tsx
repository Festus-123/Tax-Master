import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Input from "../input/Input";
import { formContext } from "../../context/formContext";
import {
  IndividualTax,
  type IndividualInputs,
} from "../../services/taxCalculator";

const Individual = () => {
  const { setIndividualResult } = useContext(formContext)
  const { state } = useLocation();
  const option = state?.option;

  const [hasPension, setHasPension] = useState(false);
  const [hasNHF, setHasNHF] = useState(false);

  const [formData, setFormData] = useState<IndividualInputs>({
    grossIncome: 0,
    basicSalary: 0,
    rent: 0,
    LIP: 0,
    pension: 8,
    NHF: 2.5,
  });

  useEffect(() => {
    const made =
      IndividualTax(formData, {
        isSalary: option === "Salary earner",
        hasPension,
        hasNHF,
      });
      setIndividualResult(made)
  }, [formData, option, hasPension, hasNHF, setIndividualResult]);

  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl ">Individual</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <Input
          value={formData.grossIncome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, grossIncome: Number(e.target.value) })
          }
          placeholder={"840,000"}
          title={"Annual Gross Income"}
        />

        {option === "Salary earner" && (
          <Input
            title={"Basic Salary"}
            value={formData.basicSalary}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, basicSalary: Number(e.target.value) })
            }
            placeholder={"600,000"}
          />
        )}

        <Input
          value={formData.rent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, rent: Number(e.target.value) })
          }
          placeholder={"200,000"}
          title={"Rent (if any) Optional"}
        />

        <Input
          value={formData.LIP}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, LIP: Number(e.target.value) })
          }
          placeholder={"--- ---"}
          title={"Life insurance (premium) Optional"}
        />

        {option !== "Salary earner" && (
          <Input
            value={formData.pension}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, pension: Number(e.target.value) })
            }
            placeholder={"8"}
            title={"Pension (in %) Optional"}
          />
        )}

        {option !== "Salary earner" && (
          <Input
            value={formData.NHF}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, NHF: Number(e.target.value) })
            }
            placeholder={"2.5"}
            title={"NHF (in %) Optional"}
          />
        )}
      </div>
        
      {option === "Salary earner" && (
        <div className="flex flex-col gap-10 ">
          <h1 className="text-md">Select if you contribute to any:</h1>
          <div className="flex flex-row items-center gap-10 ">
            <div className="flex flex-row itemms-center gap-2 ">
              <input
                checked={hasPension}
                onChange={(e) => setHasPension(e.target.checked)}
                id="pension"
                type="checkbox"
              />
              <label htmlFor="pension" className="cursor-pointer">
                Pension
              </label>
            </div>
            <div className="flex flex-row itemms-center gap-2">
              <input
                checked={hasNHF}
                onChange={(e) => setHasNHF(e.target.checked)}
                id="NHF"
                type="checkbox"
                className=""
              />
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
