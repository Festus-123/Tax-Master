export interface indvidualRues {
  grossIncome: number
  basicSalary: number
  rent: number
  LIP?: number
  pension?: number
  NHF?: number
}

interface deductibleResults {
  basicSalary: number;
  taxDeductible: number;
}

export function individualDeductibleCosts(
  input: indvidualRues,
  percentage: number,
  known: boolean = false
): deductibleResults {
  let rentRelief = (input.rent * 20) / 100;
  if (rentRelief >= 500000) {
    rentRelief = 500000;
  }
  let basicSalary = input.basicSalary;

  if (!known) {
    basicSalary = (input.basicSalary * percentage) / 100;
  }
  const pensionRelief = (input.basicSalary * 8) / 100;
  const NHFRelief = (input.basicSalary * 2.5) / 100;
  const taxDeductible = rentRelief + pensionRelief + NHFRelief;
  return { basicSalary, taxDeductible };
}

export function IndividualTax(input: indvidualRues, percentage: number): number[] {
  const deductible = individualDeductibleCosts(input, percentage, false);
  const taxableProfit = input.grossIncome - deductible.taxDeductible;
  const tax: number[] = [];
  if (taxableProfit > 0) {
    if (taxableProfit > 800000) {
      tax.push((800000 * 0) / 100);
    }
    let remainder = taxableProfit - 800000;
    if (remainder > 800000 && remainder <= 2200000) {
      tax.push((2200000 * 15) / 100);
    }
    remainder = remainder - 3000000;
    if (remainder > 2200000 && remainder <= 12000000) {
      tax.push((9000000 * 18) / 100);
    }
    remainder = remainder - 12000000;
    if (remainder > 9000000 && remainder <= 25000000) {
      tax.push((13000000 * 21) / 100);
    }
    remainder = remainder - 25000000;
    if (remainder > 13000000 && remainder <= 50000000) {
      tax.push((25000000 * 23) / 100);
    }
    remainder = remainder - 50000000;
    if (remainder > 50000000) {
      tax.push((50000000 * 25) / 100);
    }
  }
  return tax;
}

