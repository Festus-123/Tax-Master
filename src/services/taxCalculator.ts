export interface IndividualInputs {
  grossIncome: number;
  basicSalary: number;
  rent: number;
  LIP   : number;
  pension: number;
  NHF: number;
}

export interface Options {
  isSalary: boolean;
  hasPension: boolean;
  hasNHF: boolean;
}

const taxBands = [
  { limit: 800000, rate: 0 },
  { limit: 2200000, rate: 15 },
  { limit: 9000000, rate: 18 },
  { limit: 13000000, rate: 21 },
  { limit: 25000000, rate: 23 },
  { limit: Infinity, rate: 25 },
];

export function IndividualTax(input: IndividualInputs, options: Options) {
  const CRA =
    input.grossIncome * 0.2 + Math.max(input.grossIncome * 0.01, 200000);
  const rentRelief = Math.min(input.rent * 0.2, 500_000);

  let pensionRelief = 0;
  let NHFRelief = 0;

  if (options.isSalary) {
    if (options.hasPension) pensionRelief = input.basicSalary * 0.08;

    if (options.hasNHF) NHFRelief = input.basicSalary * 0.025;
  } else {
    pensionRelief = (input.grossIncome * input.pension) / 100;
    NHFRelief = (input.grossIncome * input.NHF) / 100;
  }

  const deductibleAmount =
    CRA + rentRelief + pensionRelief + NHFRelief + (input.LIP ?? 0);

  let taxableProfit = input.grossIncome - deductibleAmount;

  let totalTax = 0;

  taxBands.map(({ limit, rate }) => {
    if (taxableProfit <= 0) return;

    const taxableAmount = Math.min(taxableProfit, limit);
    totalTax += (taxableAmount * rate) / 100;
    taxableProfit -= taxableAmount;
  });

  console.log("individual",totalTax);
  return totalTax;
}

export interface OthersInput {
    grossRevenue: number,
    expenses: number,
    rent: number
}

export function OtherTax (input: OthersInput) {
    const { grossRevenue, expenses, rent } = input;

    const CRA = grossRevenue * 0.2 + Math.max(grossRevenue * 0.01, 200_000)

    const rentRelief = Math.min(rent * 0.2, 500_000);
    const deductible = CRA + expenses + rentRelief;
    
    let taxableProfit = grossRevenue - deductible;
    let TotalTax = 0;

    taxBands.map(({limit, rate}) => {
        if(taxableProfit <= 0) return;

        const taxableAmount = Math.min(taxableProfit, limit);
        TotalTax += (taxableAmount * rate) / 100
        taxableProfit -= taxableAmount;
    })

    console.log("OtherTax",TotalTax)
    return TotalTax;
}

// Busness logic
export interface expenseRule {
    premises_fee?: number,
    electricity_fee?: number,
    transport_fee?: number,
    salaries_included?: number,
    other_included?: number
}
export interface businessRule {
    grossRevenue: number,
    expenses: expenseRule,
    capitalAllowance: number,
    lossBrougth: number
}

export function BusinessTax (input: businessRule) {
    const {grossRevenue, expenses, capitalAllowance, lossBrougth} = input

    const allowableExpense = 
    (expenses.premises_fee ?? 0 ) +
    (expenses.transport_fee ?? 0) +
    (expenses.electricity_fee ?? 0) +
    (expenses.salaries_included ?? 0) +
    (expenses.other_included ?? 0);

    const deductible = allowableExpense + capitalAllowance + lossBrougth;

    const taxableAmount = grossRevenue - deductible;
    let totalTax = 0

    if(grossRevenue <= 0) return;

    // companies that earn in the range of 25,000,000
    if(grossRevenue <= 25_000_000) return totalTax = taxableAmount * 0.0
    // companies earning above 25,000,00 but less than 100,000,000
    if(grossRevenue > 25_000_000 && grossRevenue <= 100_000_000) return totalTax = taxableAmount * 0.2
    // companies earning above 100,000,000
    if(grossRevenue > 100_000_000) return totalTax = taxableAmount * 0.3;

    console.log("BusinessTax",totalTax);
    return totalTax;
}
