export class FinancialRepositoryException extends Error {
    constructor(message:string) {
        super("You have a problem with repository! Be caution!"+message);
        this.name = "FinancialRepositoryException";
    }
}