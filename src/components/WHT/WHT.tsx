import { useEffect, useState, useContext } from "react";
import { formContext } from "../../context/formContext";
import Input from "../input/Input";
import { businessWHT, type WHTRules } from "../../services/taxCalculator";

const WithholdingTax = () => {
  const { setWHTResult} = useContext(formContext)
  const [formData, setFormData] = useState<WHTRules>({
    grossAmount: 0,
    rate: 0,
  });

  useEffect(() => {
    const result = businessWHT(formData);
    setWHTResult(result)
  }, [formData, setWHTResult]);

  return (
    <div className="flex flex-col gap-8 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl">Withholding Tax (WHT)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Input
          title="Gross Payment Amount"
          placeholder="5,000,000"
          value={formData.grossAmount}
          onChange={(e) =>
            setFormData({
              ...formData,
              grossAmount: Number(e.target.value),
            })
          }
        />

        <Input
          title="WHT Rate (%)"
          placeholder="5"
          value={formData.rate}
          onChange={(e) =>
            setFormData({
              ...formData,
              rate: Number(e.target.value) / 100,
            })
          }
        />
      </div>
    </div>
  );
};

export default WithholdingTax;
