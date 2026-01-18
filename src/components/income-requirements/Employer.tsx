import { useState, useEffect, useContext } from "react";
import { formContext } from "../../context/formContext";
import Input from "../input/Input";
import { EmployerPAYETax, type PAYEInputs } from "../../services/taxCalculator";

const EmployerPAYE = () => {
  const { setReceiptData } = useContext(formContext);
  const [hasPension, setHasPension] = useState<boolean>(false);
  const [hasNHF, setHasNHF] = useState<boolean>(false);
  const [formData, setFormData] = useState<PAYEInputs>({
    grossIncome: 0,
    basicSalary: 0,
    rent: 0,
    LIP: 0,
    otherRelief: 0,
  });

  useEffect(() => {
    const {receiptData} = EmployerPAYETax(formData, {
      hasPension,
      hasNHF,
    });
    setReceiptData(receiptData);
  }, [formData, hasPension, hasNHF, setReceiptData]);
  
  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl">Employer (PAYE)</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <Input
          title="Employee Gross Anual Salary"
          placeholder="1,000,000"
          value={formData.grossIncome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, grossIncome: Number(e.target.value) })
          }
        />

        <Input
          title="Basic Salary)"
          placeholder="% of Gross Salary"
          value={formData.basicSalary}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, basicSalary: Number(e.target.value) })
          }
        />

        <Input
          title="Rent"
          placeholder="% of Gross Salary"
          value={formData.rent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, rent: Number(e.target.value) })
          }
        />

        <Input
          title="Life Insurance Premium (optional)"
          placeholder="--- ---"
          value={formData.LIP || 0}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, LIP: Number(e.target.value) })
          }
        />

        <Input
          title="Other Statutory Relief (Optional)"
          placeholder="--- ---"
          value={formData.otherRelief}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, otherRelief: Number(e.target.value) })
          }
        />

        <div className="flex flex-col gap-10 md:col-span-2">
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
      </div>
    </div>
  );
};

export default EmployerPAYE;
