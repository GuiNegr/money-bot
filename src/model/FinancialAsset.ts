import { FinancialType } from "../enums/FinancialType";

export class FinancialAsset{
        private amount:Number;
        private type:FinancialType;
        private name:String;
        private quanity:Number;


    constructor(amount:Number,type:FinancialType,name:String,quantity:Number){
            this.amount = amount;
            this.type = type;
            this.name = name;
            this.quanity = quantity;
    }

     getAmount() {
        return this.amount;  
    }

    getType(){
        return this.type;
    }

    getName(){
        return this.name;
    }

    getQuantity(){
        return this.quanity;
    }
}
