export class FinancialRepositoryException extends Error {
    constructor(message:string) {
        super(message);
        this.name = "FinancialRepositoryException";
                Object.setPrototypeOf(this, FinancialRepositoryException.prototype)

    }
}