import { BrapiApi } from "/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/service/brapiApi/BrapiApiService";
import { FinancialAsset } from "../../model/FinancialAsset";
import { FinancialRepository } from "../../repository/FinancialRepository";
import { FinancialServiceException } from "../../exception/FinancialServiceException";

export class FinancialService {
    private brapiApi: BrapiApi;
    private financialRepository:FinancialRepository;

    constructor(){
        this.brapiApi = new BrapiApi();
        this.financialRepository =  new FinancialRepository();
    }

    async getStockValue(stockName: string): Promise<any> {
        try {
            const stockData = await this.brapiApi.getStockInformation(stockName);
            return stockData;
        } catch (error: any) {
            throw new FinancialServiceException(String(error) )
        }
    }


    async save(financialAsset: FinancialAsset):Promise<boolean>{
        
    try{
    const FinancialAssetId:number = await this.financialRepository.getFinancialAssetByTicker(financialAsset.ticker)
    if(FinancialAssetId != 0) return false
    await this.financialRepository.save(financialAsset)
    return true
        }catch(err){
            throw new FinancialServiceException("A error has ocurred in save function service"+String(err))
        }
        
    }

    //não sei se irei utilizar apenas um metodo para salver e dar update
    async update(financialAsset: FinancialAsset){

    }
}
