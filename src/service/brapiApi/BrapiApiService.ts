import dotenv from "dotenv";
dotenv.config();

export class BrapiApi {
    static apiKey: string | undefined = process.env.BRAPIAPIKEY;
    static url: string = "https://brapi.dev/api/";

   
    async getStockInformation(stockName: string): Promise<any | undefined> {
        try {
            if (!BrapiApi.apiKey) {
                throw new Error("API key not set in environment variables");
            }

            const response = await fetch(`${BrapiApi.url}quote/${stockName}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${BrapiApi.apiKey}`,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (e: any) {
            console.error("Error fetching stock info:", e.message);
        }
    }
}
