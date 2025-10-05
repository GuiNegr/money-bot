import { FinancialType } from "./model/enums/FinancialType";
import { FinancialService } from "./service/financialService/FinancialService"

async function main() {
    
const financialSerivce = new FinancialService();


financialSerivce.createFinancialAsset(FinancialType.CRYPTO,"BTC",3,"BTC")
}

 main()
