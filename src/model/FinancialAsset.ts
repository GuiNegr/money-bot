import { FinancialType } from "./enums/FinancialType";
 export class FinancialAsset{
        ticker:string
         amount:number;
         type:FinancialType;
         name:string;
         quanity:number;


    constructor(amount:number,type:FinancialType,name:string,quantity:number,ticker:string){
            this.amount = amount;
            this.type = type;
            this.name = name;
            this.quanity = quantity;
            this.ticker = ticker;
    }

    
}