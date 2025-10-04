import { FinancialAsset } from "../model/FinancialAsset";
import { FinancialService } from "/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/service/financialService/FinancialService";

export class FinancialController {
    private financialService: FinancialService;

    constructor(){
        this.financialService = new FinancialService();

    }

    async getValue(stock: string): Promise<any> {
        try {
            const stockData = await this.financialService.getStockValue(stock);
            return stockData;
        } catch (error: any) {
            console.error("Erro ao obter valor da ação:", error.message || error);
            throw error;
        }
    }

    async save(finacialAsset: FinancialAsset){
        if(await this.financialService.save(finacialAsset)) console.log(finacialAsset.ticker + "Salvo com sucesso!")
        else console.log(finacialAsset.ticker + " donst not save the register already exist in bd")
    }
}
