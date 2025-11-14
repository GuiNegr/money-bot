export class FinancialType{
   
    static types = Object.freeze({
        STOCK : "STOCK",
        BDR : "BDR"
    })



    static isValid(type){
        return Object.values(FinancialType.types).includes(type)
    }
}