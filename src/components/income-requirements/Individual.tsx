const Individual = () => {
  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl ">Individual</h1>
      <div className="flex flex-wrap items-center gap-10">
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="monthly salary x 12 months">Annual Gross Income</label>
          <input
            placeholder="840,000"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="used to determine rent relief eligibiity">Rent (if any)</label>
          <input
            placeholder="500,000"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="Pension contributions">pension Contribution (Optional)</label>
          <input
            placeholder="8% of total salary"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="National housing fund contributions flex flex-wrap">NHF Contribution(Optional)</label>
          <input
            placeholder="2.5% of total salary"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="Life insurance Premium only">Life Insurance (Premium) Optional</label>
          <input
            placeholder="--- ---"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Individual;
