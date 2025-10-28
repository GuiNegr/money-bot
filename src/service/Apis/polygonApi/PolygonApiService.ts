import dotenv from "dotenv";
import { PolygonApiServiceException } from '../../../exception/PolygonApiServiceException'
dotenv.config()

export class PolygonApiService{
    private apikey: string
    private url: string

    constructor(){
        this.url="https://api.polygon.io/v3"
        this.apikey=process.env.POLYGONAPIKEY || "empty"
    }


    async getStockInformation(ticker:string){
        try{
            const response = await fetch(`${this.url}/reference/tickers/${ticker}?apiKey=${this.apikey}`,{
                method:"GET"
            });
            const data = await response.json()
            console.log(data)
        }catch(error){
            throw new PolygonApiServiceException(String(error))
        }
    }
}