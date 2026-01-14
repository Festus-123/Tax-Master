import { useEffect, useState, useContext } from 'react';
import Input from "../input/Input";
import { formContext } from "../../context/formContext";
import { OtherTax, type OthersInput } from "../../services/taxCalculator";

const Other = () => {
  const { setOtherResult } = useContext(formContext)
  const [formData, setFormData] = useState<OthersInput>({
    grossRevenue: 0,
    expenses: 0,
    rent: 0,
  });

  useEffect(() => {
    const made = OtherTax(formData)
    setOtherResult(made)
  }, [formData, setOtherResult])

  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl">Other</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <Input
          title="Annual Gross Revenue"
          placeholder="5000_000"
          value={formData.grossRevenue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, grossRevenue: Number(e.target.value) })
          }
        />

        <Input
          title="Total Allowable Expenses"
          placeholder="2000_000"
          value={formData.expenses}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, expenses: Number(e.target.value) })
          }
        />

        <Input
          title="Rent (if any) Optional"
          placeholder="--- ---"
          value={formData.rent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, rent: Number(e.target.value) })
          }
        />

      </div>
    </div>
  );
};

export default Other;
