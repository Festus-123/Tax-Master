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

export interface ReceiptItem {
  label: string;
  value: number | string;
}

export interface ReceiptData {
  title: string;
  total: number;
  items: ReceiptItem[];
}


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

  taxBands.forEach(({ limit, rate }) => {
    if (taxableProfit <= 0) return;
    const taxableAmount = Math.min(taxableProfit, limit);
    totalTax += (taxableAmount * rate) / 100;
    taxableProfit -= taxableAmount;
  });

  const receiptData: ReceiptData = {
    title: "Individual Income Tax",
    total: totalTax,
    items: [
      { label: "Gross Income", value: input.grossIncome },
      { label: "CRA", value: CRA },
      { label: "Rent Relief", value: rentRelief },
      { label: "Pension Relief", value: pensionRelief },
      { label: "NHF Relief", value: NHFRelief },
      { label: "Life Insurance Premium", value: input.LIP ?? 0 },
      { label: "Taxable Income", value: input.grossIncome - deductibleAmount },
    ],
  };

  return { totalTax, receiptData };
}


export interface PAYEInputs {
  grossIncome: number;   
  basicSalary: number;
  rent: number;
  LIP?: number;
  otherRelief: number;
}

export interface PAYEOptions {
  hasPension: boolean;
  hasNHF: boolean;
}

export function EmployerPAYETax(input: PAYEInputs, options: PAYEOptions) {
  const { grossIncome, basicSalary, rent = 0, LIP = 0, otherRelief } = input;

  const CRA =
    grossIncome * 0.2 + Math.max(grossIncome * 0.01, 200_000);

  const rentRelief = Math.min(rent * 0.2, 500_000);

  const pensionRelief = options.hasPension ? basicSalary * 0.08 : 0;
  const NHFRelief = options.hasNHF ? basicSalary * 0.025 : 0;

  const deductibleAmount =
    CRA + rentRelief + pensionRelief + NHFRelief + LIP + otherRelief;

  let taxableIncome = grossIncome - deductibleAmount;
  let totalPAYE = 0;

  taxBands.forEach(({ limit, rate }) => {
    if (taxableIncome <= 0) return;
    const taxableAmount = Math.min(taxableIncome, limit);
    totalPAYE += (taxableAmount * rate) / 100;
    taxableIncome -= taxableAmount;
  });

  const receiptData: ReceiptData = {
    title: "Employer PAYE",
    total: totalPAYE,
    items: [
      { label: "Gross Income", value: grossIncome },
      { label: "CRA", value: CRA },
      { label: "Rent Relief", value: rentRelief },
      { label: "Pension Relief", value: pensionRelief },
      { label: "NHF Relief", value: NHFRelief },
      { label: "Other Relief", value: otherRelief },
      { label: "Taxable Income", value: grossIncome - deductibleAmount },
    ],
  };

  return { totalPAYE, receiptData };
}



export interface OthersInput {
    grossRevenue: number,
    expenses: number,
    rent: number
}

export function OtherTax(input: OthersInput) {
  const { grossRevenue, expenses, rent } = input;

  const CRA = grossRevenue * 0.2 + Math.max(grossRevenue * 0.01, 200_000);
  const rentRelief = Math.min(rent * 0.2, 500_000);
  const deductible = CRA + expenses + rentRelief;

  let taxableProfit = grossRevenue - deductible;
  let TotalTax = 0;

  taxBands.forEach(({ limit, rate }) => {
    if (taxableProfit <= 0) return;
    const taxableAmount = Math.min(taxableProfit, limit);
    TotalTax += (taxableAmount * rate) / 100;
    taxableProfit -= taxableAmount;
  });

  const receiptData: ReceiptData = {
    title: "Other Income Tax",
    total: TotalTax,
    items: [
      { label: "Gross Revenue", value: grossRevenue },
      { label: "CRA", value: CRA },
      { label: "Expenses", value: expenses },
      { label: "Rent Relief", value: rentRelief },
      { label: "Taxable Profit", value: grossRevenue - deductible },
    ],
  };

  return { TotalTax, receiptData };
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

export function BusinessTax(input: businessRule) {
  const { grossRevenue, expenses, capitalAllowance, lossBrougth } = input;

  const allowableExpense =
    (expenses.premises_fee ?? 0) +
    (expenses.transport_fee ?? 0) +
    (expenses.electricity_fee ?? 0) +
    (expenses.salaries_included ?? 0) +
    (expenses.other_included ?? 0);

  const deductible = allowableExpense + capitalAllowance + lossBrougth;
  const taxableAmount = grossRevenue - deductible;

  let totalTax = 0;

  if (grossRevenue <= 25_000_000) totalTax = taxableAmount * 0;
  else if (grossRevenue <= 100_000_000) totalTax = taxableAmount * 0.2;
  else totalTax = taxableAmount * 0.3;

  const receiptData: ReceiptData = {
    title: "Company Income Tax (CIT)",
    total: totalTax,
    items: [
      { label: "Gross Revenue", value: grossRevenue },
      { label: "Allowable Expenses", value: allowableExpense },
      { label: "Capital Allowance", value: capitalAllowance },
      { label: "Loss Brought Forward", value: lossBrougth },
      { label: "Taxable Profit", value: taxableAmount },
    ],
  };

  return { totalTax, receiptData };
}


export interface VATRules {
    grossPrice: number,
    rate: number,
}
export interface VATOptions {
  isVAT: boolean
  isInclusive: boolean,
  isExclusive: boolean,
}

export function businessVAT(input: VATRules, options: VATOptions) {
  const { grossPrice, rate } = input;

  let vat = 0;
  let net = grossPrice;
  let total = grossPrice;

  if (options.isVAT && rate > 0) {
    if (options.isExclusive) {
      vat = (grossPrice * rate) / 100;
      total = grossPrice + vat;
    }

    if (options.isInclusive) {
      vat = Math.round(
        grossPrice * ((rate / 100) / (1 + rate / 100))
      );
      net = grossPrice - vat;
    }
  }

  const receiptData: ReceiptData = {
    title: "Value Added Tax (VAT)",
    total: vat,
    items: [
      { label: "Gross Price", value: grossPrice },
      { label: "VAT Rate (%)", value: rate },
      { label: "VAT Amount", value: vat },
      { label: "Net Amount", value: net },
    ],
  };

  return { total, receiptData };
}


export interface WHTRules {
  grossAmount: number,
  rate: number
}

export function businessWHT(input: WHTRules) {
  const { grossAmount, rate } = input;

  const wht = (grossAmount * rate) / 100;
  const netPayable = grossAmount - wht;

  const receiptData: ReceiptData = {
    title: "Withholding Tax (WHT)",
    total: wht,
    items: [
      { label: "Gross Amount", value: grossAmount },
      { label: "WHT Rate (%)", value: rate },
      { label: "WHT Deducted", value: wht },
      { label: "Net Payable", value: netPayable },
    ],
  };

  return { wht, receiptData };
}


