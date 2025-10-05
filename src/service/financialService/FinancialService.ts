import { BrapiApi } from "/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/service/brapiApi/BrapiApiService";
import { FinancialAsset } from "../../model/FinancialAsset";
import { FinancialRepository } from "../../repository/FinancialRepository";
import { FinancialServiceException } from "../../exception/FinancialServiceException";
import { FinancialType } from "../../model/enums/FinancialType";
import { CoinMarketCapService } from "../coinMarketCapService/CoinMarketCapService";

export class FinancialService {
    private brapiApi: BrapiApi;
    private coinMarketCap: CoinMarketCapService
    private financialRepository:FinancialRepository;

    constructor(){
        this.brapiApi = new BrapiApi();
        this.financialRepository =  new FinancialRepository();
        this.coinMarketCap = new CoinMarketCapService();
    }

    async getStockValue(stockName: string): Promise<any> {
        try {
            const stockData = await this.brapiApi.getStockInformation(stockName);

            if(stockData.error){
                console.log(stockData.message)
                return null
            }

            return stockData;
        } catch (error) {
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


    async createFinancialAsset(type:FinancialType,name:string,quantity:number,ticker:string):Promise<boolean>{
        let amout =  null;
        let  objectFinancial = null;
        
        switch(type){
            case FinancialType.STOCK:
            objectFinancial = await this.brapiApi.getStockInformation(ticker)
            amout = objectFinancial.results[0]?.regularMarketPrice || 0
            break;
            
            case FinancialType.CRYPTO:
            objectFinancial = await this.coinMarketCap.getCryptoInformation(ticker)
            amout = objectFinancial?.[0]?.quote?.USD?.price || 0
            break;
        }

        if(amout === 0) return false

        const financialAsset:FinancialAsset =  new FinancialAsset(amout,type,name,quantity,ticker)
        this.save(financialAsset)
        
        return true

    }


    async update(financialAsset: FinancialAsset){

    }
}
