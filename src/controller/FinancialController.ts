import { FinancialAsset } from "../model/FinancialAsset";
import { FinancialService } from "/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/service/financialService/FinancialService";
import { FinancialType } from "../model/enums/FinancialType";


// deixar a controller para a ultima modificação já que vai ser ela que vai trabalhar para minha api
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




    //trocar aqui para fazer ser consumido o metodo que irá construir primeiro o objeto!
    async save(type:string,name:string,quantity:number,ticker:string){
        this.financialService.createFinancialAsset(type,name,quantity,ticker)
    }

    async getTickerInformation(ticker:string): Promise<any>{
        const informartion = this.financialService.getInfoAboutTikcer(ticker)
       return informartion;
    }
}
