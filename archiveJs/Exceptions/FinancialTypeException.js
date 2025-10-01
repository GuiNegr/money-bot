class FinancialTypeException extends Error{

    constructor(){
        super("Financial type is wrong!")
        this.name = 'invalidTypeFinancial'
    }
}