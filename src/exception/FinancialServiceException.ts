export class FinancialServiceException extends Error{
    constructor(message:string){
        super("You have a probleam with your FinancialAsset Service! "+message)
        this.name = "FinancialServiceException";
    }
}