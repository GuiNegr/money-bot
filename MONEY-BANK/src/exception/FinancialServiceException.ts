export class FinancialServiceException extends Error{
    constructor(message:string){
        super(message)
        this.name = "FinancialServiceException";
        Object.setPrototypeOf(this, FinancialServiceException.prototype)

    }
}