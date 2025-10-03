export class FinancialTypeException extends Error {
    constructor() {
        super("Financial type is wrong!");
        this.name = "FinancialTypeException";
        Object.setPrototypeOf(this, FinancialTypeException.prototype);
    }
}