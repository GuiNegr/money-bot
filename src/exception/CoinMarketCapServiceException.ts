


export class CoinMarketCapServiceException extends Error{
    constructor(message:string){
        super(message)
        this.name = "CoinMarketCapServiceException"
        Object.setPrototypeOf(this, CoinMarketCapServiceException.prototype)
    }
}