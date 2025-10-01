import { FinancialAsset } from "./src/model/FinancialAsset.ts";
import { FinancialType } from "./src/enums/FinancialType.ts";


let teste:FinancialAsset = new FinancialAsset(20,FinancialType.BDRM,"PETR3",2)

console.log(teste)