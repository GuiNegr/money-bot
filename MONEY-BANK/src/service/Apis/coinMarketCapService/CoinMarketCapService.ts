import dotenv from 'dotenv';
import { CoinMarketCapServiceException } from '../../../exception/CoinMarketCapServiceException';
dotenv.config()


export class CoinMarketCapService{
    private url:String;
    private apiKey:String;


    constructor(){
        this.url = 'https://pro-api.coinmarketcap.com/v2/'
        this.apiKey = process.env.COINMARKETCAPAPIKEY || "empty"
    }



    async getCryptoInformation(symbol:string):Promise<any>{
        try{
            const response = await fetch(`${this.url}cryptocurrency/quotes/latest?symbol=${symbol}`,{
                method:"GET",
                headers:{
                    "X-CMC_PRO_API_KEY":`${this.apiKey}`,
                },
            })
            const data = await response.json()            
            const resp = data.data?.[symbol] ?? null;
            return resp

        }catch(e){
            throw new CoinMarketCapServiceException(String(e))
        }

    }
}