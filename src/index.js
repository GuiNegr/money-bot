import { FinancialType } from './enums/FinancialType.js';
import { FinancialAsset } from './model/FinancialAsset.js';

const financial = new FinancialAsset(20,FinancialType.types.BDR,"NUBANK")

console.log(financial)
console.log(financial.getName())