import { FinancialService } from "../service/FinancialService.js";


export class FinancialController{

     static financialService = new FinancialService()

       async getValue(stock) {
        try {
            const stockData = await FinancialController.financialService.getStockValue(stock);
            return stockData;
        } catch (error) {
            console.error("Erro ao obter valor da ação:", error.message);
            throw error;
        }
    }

}