import { BrapiApi } from "../service/brapiApi/BrapiApi.js";


export class FinancialService{

    static brapiApi = new BrapiApi();

    async getStockValue(stockName){
          try {
            const stockData = await FinancialService.brapiApi.getStockInformation(stockName);
            return stockData;
        } catch (error) {
            console.error("Erro ao obter valor da ação:", error.message);
            throw error;
        }
    }
}