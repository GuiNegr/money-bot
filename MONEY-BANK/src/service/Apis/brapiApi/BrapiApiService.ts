import dotenv from "dotenv";
import { BrapiApiException } from "../../../exception/BrapiApiException";
dotenv.config();

export class BrapiApi {
    private apiKey: string;
    private url: string;

    constructor(){
        this.apiKey= process.env.BRAPIAPIKEY || "empty";
        this.url=  "https://brapi.dev/api/";

    }

   
    async getStockInformation(stockName: string): Promise<any | undefined> {
        try {
            const response = await fetch(`${this.url}quote/${stockName}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${this.apiKey}`,
                },
            });

            const data = await response.json();
            return data;
        } catch (e: any) {
             throw new BrapiApiException(String(e))

            }
    }
}
