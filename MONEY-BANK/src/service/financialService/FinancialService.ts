import { BrapiApi } from "../Apis/brapiApi/BrapiApiService";
import { FinancialAsset } from "../../model/FinancialAsset";
import { FinancialRepository } from "../../repository/FinancialRepository";
import { FinancialServiceException } from "../../exception/FinancialServiceException";
import { FinancialType } from "../../model/enums/FinancialType";
import { CoinMarketCapService } from "../Apis/coinMarketCapService/CoinMarketCapService";

export class FinancialService {
    private brapiApi: BrapiApi;
    private coinMarketCap: CoinMarketCapService
    private financialRepository:FinancialRepository;

    constructor(){
        this.brapiApi = new BrapiApi();
        this.financialRepository =  new FinancialRepository();
        this.coinMarketCap = new CoinMarketCapService();
    }

    /// esse precisa verificar se é cripto ou não?
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


    async decideIfIsGonnaSaveOrUpdate(financialAsset: FinancialAsset):Promise<boolean>{   
     try{
    const FinancialAssetId:number = await this.financialRepository.getFinancialAssetByTicker(financialAsset.ticker)
    if(FinancialAssetId != 0) return false
    await this.financialRepository.save(financialAsset)
    return true
        }catch(err){
            throw new FinancialServiceException("A error has ocurred in save function service"+String(err))
        }
    }


    async createFinancialAsset(type:string,name:string,quantity:number,ticker:string):Promise<boolean>{
        let amout =  null;
        let  objectFinancial = null;
        let financialTyper = FinancialType.DEFAULT
        console.log(financialTyper)
        console.log(type)

        
        switch(type){
            case 'STOCK' :
            objectFinancial = await this.brapiApi.getStockInformation(ticker)
            amout = objectFinancial.results[0]?.regularMarketPrice || 0
            financialTyper = FinancialType.STOCK
            console.log(financialTyper)
            break;
            
            case 'CRYPTO':
            objectFinancial = await this.coinMarketCap.getCryptoInformation(ticker)
            amout = objectFinancial?.[0]?.quote?.USD?.price || 0
            financialTyper = FinancialType.CRYPTO
            break;
        }
         console.log(financialTyper)

        if(amout === 0) return false

        const financialAsset:FinancialAsset =  new FinancialAsset(amout,financialTyper,name,quantity,ticker)
        this.decideIfIsGonnaSaveOrUpdate(financialAsset)
        
        return true

    }


    async update(financialAsset: FinancialAsset){

    }



    //tem que checar os valores caso seja diferente atualiza oque está no bd  e depois faz um novo get
    async getInfoAboutTikcer(ticker:string) : Promise<any>{
        let tickerInBd = null;
        const isNotFoundAnyValue = 0;
        let valueStockInMarket = 0;
        let valueTickerInBd = 0;
        let stockInMarket = null;

        try{
        tickerInBd = await this.financialRepository.getTickerInBdAndReturn(ticker)
        valueTickerInBd = tickerInBd.amount;
       
        stockInMarket = await this.getStockValue(ticker)
        valueStockInMarket = stockInMarket.results[0].regularMarketPrice
        console.log(stockInMarket)

        if(valueStockInMarket != valueTickerInBd){
            this.financialRepository.updateTickerValue(ticker,valueStockInMarket)
        }

       
        tickerInBd = await this.financialRepository.getTickerInBdAndReturn(ticker)

        }catch(error){
            console.log(String(error))
        }
        tickerInBd.amout = tickerInBd.amout * tickerInBd.quantity
        
        if(tickerInBd != isNotFoundAnyValue ){
            return tickerInBd
        }
        return "Não Foi localizado nenhum ticker com esse nome em suas ações"
    }
}
