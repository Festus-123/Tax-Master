import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaVideo } from "react-icons/fa";

const TermsPolicies = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-[80%] sticky top-0 flex items-center justify-center p-4 lg:p-8">
      <div className="w-full flex flex-col p-4 mt-5 lg:mt-0 bg-white rounded-md lg:p-8 gap-10">
        <div className="flex flex-row items-center justify-end gap-10">
          <div className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#8080801d] rounded-md p-1 lg:p-2">
            <a href="#iFrame">watch video</a>
            <FaVideo />
          </div>
          <div onClick={() => navigate('/category')} className="flex flex-row items-center gap-2 cursor-pointer hover:bg-[#8080801d] rounded-md p-1 lg:p-2">
            <p>Skip</p>
            <FaArrowRight />
          </div>
        </div>
        <h1 className="font-medium text-xl md:text-2xl lg:text-3xl">
          Tax Policies and Rules
        </h1>
        <h1 className="font-medium">
          The 2026 Nigeria Tax Rules under the Nigeria Tax Act (NTA) 2025 and
          related tax reforms
        </h1>

        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">
            📘 Nigeria Tax Rules – Terms & Conditions (Effective 1 January 2026)
          </h1>

          {/* 1. Introduction and Scope */}
          <div>
            <p className="font-medium">📌 1. Introduction and Scope</p>
            <p>
              This document outlines the terms, conditions, and compliance
              requirements for taxpayers in Nigeria under the Nigeria Tax Act
              2025 (NTA) and related tax reforms, effective 1 January 2026. It
              applies to individuals, businesses, non-resident taxpayers, and
              digital service providers operating in or earning income from
              Nigeria.
            </p>
          </div>

          {/* 2. Definitions */}
          <div>
            <p className="font-medium">📌 2. Definitions</p>
            <p>
              <strong>Taxpayer:</strong> Any individual or entity required to
              register, file returns, and pay tax in Nigeria. <br />
              <strong>Tax Year:</strong> The 12-month period for which income
              and obligations are assessed. <br />
              <strong>TIN / UTIN:</strong> Taxpayer Identification Number /
              Unified Taxpayer Identification Number — a unique ID issued to
              each taxpayer. <br />
              <strong>NRS:</strong> Nigeria Revenue Service — the tax authority
              responsible for administration, compliance, and enforcement.
            </p>
          </div>

          {/* 3. Registration & Identification */}
          <div>
            <p className="font-medium">📌 3. Registration & Identification</p>
            <p>
              All taxpayers must register for a TIN or UTIN before filing any
              tax returns or making payments. Registration is done via the
              official NRS portal (https://tin.jtb.gov.ng). Failure to register
              attracts penalties and restricts lawful compliance.
            </p>
            <p>
              Banks and financial institutions require TINs for account opening
              and transactions. Digital compliance is mandatory.
            </p>
          </div>

          {/* 4. Taxable Persons & Income */}
          <div>
            <p className="font-medium">📌 4. Taxable Persons & Income</p>
            <p>
              <strong>Individuals:</strong> Residents are taxed on worldwide
              income; non-residents are taxed on Nigerian-sourced income. This
              includes income from salaries, freelancing, digital platforms,
              crypto, and capital gains. <br />
              <strong>Businesses:</strong> All companies, enterprises, and
              digital service providers must comply. Small businesses below
              the ₦50M turnover mark qualify for corporate tax exemptions.
            </p>
          </div>

          {/* 5. Tax Types and Rates */}
          <div>
            <p className="font-medium">📌 5. Tax Types and Rates</p>
            <p>
              <strong>Personal Income Tax (PIT):</strong> Progressive marginal rates from
              0% to 25%. Annual adjusted income under ₦800,000 is 100% tax-free. <br />
              <strong>Corporate Tax (CIT):</strong> 0% for Small Companies (turnover under ₦50M), 20% for Medium, and a standard 30% for Large Companies. <br />
              <strong>Development Levy:</strong> 4% of assessable profits (Small companies are completely exempt). <br />
              <strong>VAT:</strong> Standard rate of 7.5% managed via e-invoicing. Businesses below ₦50M annual turnover are exempt from registration and charging VAT. <br />
              <strong>Withholding Tax:</strong> Applied to certain payments, including interest and contracts; rates vary by transaction type.
            </p>
          </div>

          {/* 6. Filing & Payment Rules */}
          <div>
            <p className="font-medium">📌 6. Filing & Payment Rules</p>
            <p>
              All tax returns must be filed electronically via the official NRS
              portal. VAT, PIT, CIT, and Withholding Tax returns follow
              established deadlines. Payments must be digital; cash payments are
              prohibited. Non-compliance may incur penalties.
            </p>
          </div>

          {/* 7. Compliance & Penalties */}
          <div>
            <p className="font-medium">📌 7. Compliance & Penalties</p>
            <p>
              Failure to register: ₦50,000 initial fine plus ₦25,000 monthly.
              <br />
              Late filing: ₦100,000 initial fine plus ₦50,000 monthly.
              <br />
              Incorrect filings or non-payment attract heavier fines and
              possible interest. <br />
              The NRS enforces compliance and may issue notices or audits.
            </p>
          </div>

          {/* 8. Special Provisions */}
          <div>
            <p className="font-medium">📌 8. Special Provisions</p>
            <p>
              Digital and virtual asset transactions, including cryptocurrency,
              fall under taxable income with capital gains taxed under progressive PIT bands up to 25%. 
              Corporate share disposal exemptions apply only where annual sales proceeds are below ₦150 million and net gains are under ₦10 million.
            </p>
          </div>

          {/* 9. Rights of Taxpayers */}
          <div>
            <p className="font-medium">📌 9. Rights of Taxpayers</p>
            <p>
              Taxpayers have the right to receive assistance, appeal
              assessments, access digital systems securely, and have personal
              and business data treated confidentially.
            </p>
          </div>

          {/* 10. How to Stay Compliant */}
          <div>
            <p className="font-medium">📌 10. How to Stay Compliant</p>
            <ul className="list-disc pl-5">
              <li>Register for TIN/UTIN promptly.</li>
              <li>
                Understand applicable taxes (PIT, CIT, VAT, Withholding Tax).
              </li>
              <li>Submit returns electronically via the NRS portal.</li>
              <li>Make payments digitally through approved channels.</li>
              <li>Keep accurate records and digital invoices.</li>
              <li>Respond promptly to NRS notices.</li>
            </ul>
          </div>

          {/* Video explanation */}
          <div id="iFrame" className="flex flex-col gap-2 border-b border-[#80808044] py-4">
            <iframe
              src="https://www.youtube.com/embed/5QRUfGspTdA"
              className="w-full h-80"
              title="Nigerian 2026 tax Acts"
            ></iframe>
            <a
              className="text-blue-500 hover:text-blue-500 hover:underline"
              href="https://www.youtube.com/watch?v=5QRUfGspTdA"
            >
              Click here to check for more on the Nigerian 2026 Tax Acts
            </a>
          </div>

          {/* 11. References */}
          <div>
            <p className="font-medium">📌 11. References & Sources</p>
            <ul className="list-disc pl-5">
              <li>Nigeria Tax Act 2025 (NTA) – Effective January 1, 2026</li>
              <li>
                Nigeria Revenue Service (NRS) Portal – https://tin.jtb.gov.ng
              </li>
              <li>
                EY Tax News –
                https://taxnews.ey.com/news/2025-1388-nigeria-tax-act-2025-has-been-signed-highlights
              </li>
              <li>
                Punch NG –
                https://punchng.com/highlights-of-new-tax-laws-starting-january-1-2026/
              </li>
              <li>
                Mondaq –
                https://www.mondaq.com/nigeria/tax-authorities/1658706/the-new-era-of-taxation-in-nigeria-what-businesses-and-individuals-should-know-about-the-2025-tax-reform-acts
              </li>
            </ul>
          </div>

          <button onClick={() => navigate('/category')} className="bg-blue-700 hover:bg-blue-500  text-white text-center p-2 md:p-3 lg:p-4 rounded-md w-full cursor-pointer">
            Estimate your Tax
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsPolicies;