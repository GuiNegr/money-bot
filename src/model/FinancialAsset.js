import { FinancialType } from "../enums/FinancialType.js";

export class FinancialAsset{

    constructor(value,type,name){

        if(!FinancialType.isValid(type)){
            throw   new FinancialTypeException()
        }

        this.value = value;
        this.name = name;
    }

    getValue(){
        return this.value;
    }

    getType(){
        return this.type;
    }

    getName(){
        return this.name;
    }

    setName(newName){
        this.name = newName;
    }

    setValue(newValue){
        this.value = newValue;
    }

    setType(newType){
        this.type = newType;
    }
}