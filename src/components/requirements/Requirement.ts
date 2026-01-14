export const requirementRules = (selected: string[]) => {
  const requirements: string[] = [];

  selected.forEach((item) => {
    if (item === "Individual") {
      requirements.push(
        "Annual Gross Income – Your total income for the year before any deductions.",
        "Basic Salary (Salary Earners Only) – Used to calculate pension and NHF deductions.",
        "Rent (Optional) – Used to calculate rent relief (20% of rent, capped by law).",
        "Life Insurance Premium (Optional) – Premiums paid for approved life insurance policies are tax-deductible.",
        "Pension Contribution – Deducted automatically for salary earners or entered as a percentage for self-employed individuals.",
        "NHF Contribution – Deducted based on basic salary (salary earners) or as a percentage (self-employed)."
      );
    }

    else if (item === "Employer(PAYE)") {
      requirements.push(
        "Employee Gross Annual Salary – Total annual salary paid to the employee.",
        "Basic Salary – Used to calculate statutory pension and NHF deductions.",
        "Rent Allowance – Used to calculate rent relief for the employee.",
        "Life Insurance Premium (Optional) – Deductible if paid on behalf of the employee.",
        "Other Statutory Reliefs (Optional) – Approved deductions such as union dues or professional subscriptions.",
        "Pension & NHF Selection – Indicate whether the employee contributes to pension and NHF."
      );
    }

    else if (item === "Business") {
      requirements.push(
        "Annual Gross Revenue – Total business income before deductions.",
        "Allowable Business Expenses – Operating costs such as rent, electricity, transport, and salaries.",
        "Capital Allowance (Optional) – Tax relief on business assets like equipment and machinery.",
        "Loss Brought Forward (Optional) – Previous year losses carried forward to reduce current taxable profit."
      );
    }

    else if (item === "Other") {
      requirements.push(
        "Gross Income or Revenue – Total income received.",
        "Allowable Expenses – Deductible costs such as rent or statutory contributions.",
        "Applicable Tax Rates – Used to calculate tax on the remaining taxable amount."
      );
    }
  });

  return requirements;
};
