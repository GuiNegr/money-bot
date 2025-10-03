import { FinancialService } from "/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/service/financialService/FinancialService";

export class FinancialController {
    static financialService: FinancialService = new FinancialService();


    async getValue(stock: string): Promise<any> {
        try {
            const stockData = await FinancialController.financialService.getStockValue(stock);
            return stockData;
        } catch (error: any) {
            console.error("Erro ao obter valor da ação:", error.message || error);
            throw error;
        }
    }
}
