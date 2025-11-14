import dotenv from 'dotenv';
dotenv.config();


export class BrapiApi{
    static apiKey = process.env.BRAPIAPIKEY
    static url = "https://brapi.dev/api/"


    async getStockInformation(stockName){

        try{
            const response = await fetch(BrapiApi.url + "quote/" + stockName, {
                method:"get",
                headers:{
                    "Authorization": "Bearer "+BrapiApi.apiKey
                }
            })
            
            
            if(!response.ok){

                throw new Error(response.status)
            }
            const data = await response.json()
            return data
        }catch(e){
            console.log(e.message)
        }
    }
}