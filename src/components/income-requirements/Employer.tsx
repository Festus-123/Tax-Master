import Input from "../input/Input";

const EmployerPAYE = () => {
  return (
    <div className="flex flex-col gap-10 border-b border-[#8080802e] py-4 lg:py-8">
      <h1 className="font-medium text-xl">Employer (PAYE)</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <Input 
          title="Employer Gross Anual Salary"
          placeholder="1,000,000"
          value={0}
          onChange={""}/>

        <Input 
          title="Employee Pension Contribution (Optional)"
          placeholder="% of Gross Salary"
          value={0}
          onChange={""}/>

        <Input 
          title="NHF Contribution (Optional)"
          placeholder="% of Gross Salary"
          value={0}
          onChange={""}/>

        <Input 
          title="Other Statutory Relief (Optional)"
          placeholder="--- ---"
          value={0}
          onChange={""}/>

        <Input 
          title="Number of Employers"
          placeholder="10"
          value={4}
          onChange={""}/>
      </div>
    </div>
  );
};

export default EmployerPAYE;
