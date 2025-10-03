import { BrapiApi } from "/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/service/brapiApi/BrapiApiService";

export class FinancialService {
    static brapiApi: BrapiApi = new BrapiApi();

    async getStockValue(stockName: string): Promise<any> {
        try {
            const stockData = await FinancialService.brapiApi.getStockInformation(stockName);
            if (!stockData) {
                throw new Error(`Não foi possível obter dados para a ação ${stockName}`);
            }
            return stockData;
        } catch (error: any) {
            console.error("Erro ao obter valor da ação:", error.message || error);
            throw error;
        }
    }
}
