// // function to calculate users tax 
// type RULES = ""

// interface IndividualRules {
//     grossIncome: number,
//     rent: number,
//     pension?: number,
//     NHF?: number,
//     LIP?: number,
// }

// function handleRent (rent: number) {
//     let relief
//     const rentRelief = Math.floor((rent * 20) /100)
//     if(rentRelief > 500000){
//         relief = 0
//     }else if (rentRelief === 0){
//         relief = 0
//     }
//     return relief
// }
// function deductible (relief: number, pension: number, NHF: number, LIP: number) {
//     const taxtDeductible = relief + pension + NHF + LIP 
//     return taxtDeductible;
// }