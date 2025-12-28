

const EmployerPAYE = () => {
  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl">Employer (PAYE)</h1>

      <div className="flex flex-wrap items-center gap-10">
        <div className="flex flex-row items-center gap-5">
          <label title="Annual salary of one employee">
            Employee Gross Annual Salary
          </label>
          <input
            placeholder="1,200,000"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>

        <div className="flex flex-row items-center gap-5">
          <label title="Employee pension contribution (usually 8%)">
            Employee Pension Contribution (Optional)
          </label>
          <input
            placeholder="8% of gross salary"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>

        <div className="flex flex-row items-center gap-5">
          <label title="National Housing Fund contribution (2.5%)">
            NHF Contribution (Optional)
          </label>
          <input
            placeholder="2.5% of gross salary"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>

        <div className="flex flex-row items-center gap-5">
          <label title="Other statutory reliefs if applicable">
            Other Statutory Reliefs (Optional)
          </label>
          <input
            placeholder="--- ---"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>

        <div className="flex flex-row items-center gap-5">
          <label title="Total number of employees">
            Number of Employees
          </label>
          <input
            placeholder="10"
            type="number"
            className="boder-none outline-none bg-[#80808018] p-2 lg:p-4 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployerPAYE;
