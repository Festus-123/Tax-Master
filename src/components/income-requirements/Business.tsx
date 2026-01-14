import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { formContext } from "../../context/formContext";
import Input from "../input/Input";
import VAT from "../VAT/VAT";
import WHT from "../WHT/WHT"
import {
  BusinessTax,
  type businessRule,
} from "../../services/taxCalculator";

const Business = () => {
  const { state} = useLocation();
  const { setBusinessResult } = useContext(formContext)
  const busienssOption = state?.busienssOption;
  const [select, setSelect] = useState<string[]>([]);
  const [array, setArray] = useState<string[]>([
    "Premises Fee",
    "Electricity Fee",
    "Transport Fee",
    "Salaries included",
    "Otthers included",
  ]);
  const [formData, setFormData] = useState<businessRule>({
    grossRevenue: 0,
    expenses: {
      premises_fee: 0,
      electricity_fee: 0,
      salaries_included: 0,
      transport_fee: 0,
      other_included: 0,
    },
    capitalAllowance: 0,
    lossBrougth: 0,
  });

  useEffect(() => {
    const made = BusinessTax(formData);
    setBusinessResult(made)
  }, [formData, setBusinessResult]);

  const handleSelect = (item: string) => {
    setSelect((prev) => [...prev, item]);
    setArray((prev) => prev.filter((i) => i !== item));
  };

  const handleRemoveSelect = (item: string) => {
    setArray((prev) => [...prev, item]);
    setSelect((prev) => prev.filter((i) => i !== item));
  };

  if(busienssOption === "CIT") return;
  if(busienssOption === "VAT") return <VAT />
  if(busienssOption === "WHT") return <WHT />

  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl">Business</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        <Input
          title="Anual Gross Revenue"
          placeholder="100,000,000"
          value={formData.grossRevenue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, grossRevenue: Number(e.target.value) })
          }
        />

        <Input
          title="Capital Allowance (Optional)"
          placeholder="--- ---"
          value={formData.capitalAllowance}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({
              ...formData,
              capitalAllowance: Number(e.target.value),
            })
          }
        />

        <Input
          title="Loss Brougth Forward (Optioanl)"
          placeholder="--- ---"
          value={formData.lossBrougth}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData({ ...formData, lossBrougth: Number(e.target.value) })
          }
        />

        <div className="relative flex flex-col md:col-span-2 gap-5">
          <h1 className="font-medium">Total Allowable Expenses</h1>
          <div className="flex flex-row flex-wrap items-start gap-5 border-b border-[#80808060] py-2 lg:py-4">
            {array.length === 0 ? (
              <p>All Options Selected</p>
            ) : (
              [...array].sort().map((char, i) => (
                <div
                  key={i}
                  onClick={() => handleSelect(char)}
                  className="rounded-md p-1 md:p-1.5 lg:p-2 flex flex-row items-center cursor-pointer gap-5 hover:bg-[#80808010]"
                >
                  {char}
                </div>
              ))
            )}
          </div>
        </div>

        {(select.length !== 0 &&
          [...select].sort().map((char, index) => {
            type expenseKEy = keyof businessRule["expenses"];
            const key: expenseKEy = char
              .split(" ")
              .join("_")
              .toLocaleLowerCase() as expenseKEy;

            return (
              <div
                key={index}
                className="cursor-pointer flex items-start"
              >
                <Input
                  title={char}
                  placeholder={"--- ---"}
                  value={formData.expenses[key] ?? 0}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({
                      ...formData,
                      expenses: {
                        ...formData.expenses,
                        [key]: Number(e.target.value),
                      },
                    })
                  }
                />
                <div 
                  onClick={() => handleRemoveSelect(char)}
                  className="bg-[#8080801a] p-2 lg:p-3 rounded-full hover:bg-[#8080802e]">
                  <FaXmark className="text-[grey]" />
                </div>
              </div>
            );
          })) ||
          (select.length === 0 && <p>No Options Selected</p>)}
      </div>
    </div>
  );
};

export default Business;
