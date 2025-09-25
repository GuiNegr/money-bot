import {FinancialController} from './src/controller/FinancialController.js'
import { FinancialType } from './src/enums/FinancialType.js';
import { FinancialAsset } from './src/model/FinancialAsset.js';

const controller = new FinancialController();


const valueInformation = await controller.getValue('ROXO34')

const price = valueInformation.results[0].regularMarketPrice
const name = valueInformation.results[0].longName

const financial = new FinancialAsset(price,FinancialType.types.BDR,name)

console.log(financial)

    