const Other = () => {
  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl">Other</h1>

      <div className="flex flex-wrap items-center gap-10">
        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="Total business income for the year">
            Annual Gross Revenue
          </label>
          <input
            placeholder="5,000,000"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>

        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="Allowable business expenses under Nigerian tax law">
            Total Allowable Expenses (not optional)
          </label>
          <input
            placeholder="2,000,000"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>

        <div className="flex flex-row flex-wrap items-center gap-5">
          <label title="Capital allowances claimable for the year">
            Rent (if any) Optional
          </label>
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

export default Other;
