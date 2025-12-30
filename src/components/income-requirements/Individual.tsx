import { useContext, useState } from "react";
import { formContext } from "../../context/formContext";

const Individual = () => {
    const {setResult} = useContext(formContext)
    interface formData {
        grossIncome: number,
        rent: number,
        pension: number,
        NHF?: number,
        LIP?: number
    }
    const [formData, setFormData] = useState<formData>({
        grossIncome: 0,
        rent: 0,
        pension: 0,
        NHF: 0,
        LIP: 0
    })
    
    const totalAmount = () => {
        console.log("wworking")
       const total = formData.grossIncome + ((formData.rent * 20) / 20) + formData.pension
       console.log("total", total)
       setResult(total)
    }
  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl ">Individual</h1>
      <div className="flex flex-wrap items-center gap-10">
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="monthly salary x 12 months">Annual Gross Income</label>
          <input
          value={formData.grossIncome}
          onChange={(e) => setFormData({...formData, grossIncome: Number(e.target.value)})}
            placeholder="840,000"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md "
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="used to determine rent relief eligibiity">Rent (if any)</label>
          <input
          value={formData.rent}
          onChange={(e) => setFormData({...formData, rent: Number(e.target.value)})}
            placeholder="500,000"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="Pension contributions">pension Contribution (Optional)</label>
          <input
          value={formData.pension}
          onChange={(e) => setFormData({...formData, pension: Number(e.target.value)})}
            placeholder="8% of total salary"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="National housing fund contributions flex flex-wrap">NHF Contribution(Optional)</label>
          <input
          value={formData.NHF}
          onChange={(e) => setFormData({...formData, NHF: Number(e.target.value)})}
            placeholder="2.5% of total salary"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="Life insurance Premium only">Life Insurance (Premium) Optional</label>
          <input
          value={formData.LIP}
          onChange={(e) => setFormData({...formData, LIP: Number(e.target.value)})}
            placeholder="--- ---"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
        <button onClick={totalAmount} className="cursor-pointer bg-[#8080801b] p-2 rounded-xl">Clock me</button>
        {/* {setResult && totalAmount() && console.log(totalAmount()) } */}
      </div>
    </div>
  );
};

export default Individual;
