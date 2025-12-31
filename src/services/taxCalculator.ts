export interface IndividualInputs {
  grossIncome: number;
  basicSalary: number;
  rent: number;
  LIP?: number;
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

  console.log(totalTax);
  return totalTax;
}
