import {FinancialController} from './src/controller/FinancialController.js'
import { FinancialType } from './src/enums/FinancialType.js';
import { FinancialAsset } from './src/model/FinancialAsset.js';
import {FinancialRepository} from './src/Repository/FinancialRepository.js'

const controller = new FinancialController();
const valueInformation = await controller.getValue('PETR3')
const price = valueInformation.results[0].regularMarketPrice
const name = valueInformation.results[0].longName

const financial = new FinancialAsset(price,FinancialType.types.STOCK,name)

console.log(financial)

const mysql = new FinancialRepository();

mysql.save(financial)



mysql.getAlldata()