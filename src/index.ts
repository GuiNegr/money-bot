import { FinancialController } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/controller/FinancialController';
import { FinancialType } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/model/enums/FinancialType';
import { FinancialAsset } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/model/FinancialAsset';
import { FinancialRepository } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/repository/FinancialRepository';

async function main() {
    const controller = new FinancialController();
    const valueInformation = await controller.getValue('PETR3');
    console.log(valueInformation)
    const result = valueInformation.results[0];
    const price: number = result.regularMarketPrice;
    const name: string = result.longName;
    const financial = new FinancialAsset(price, FinancialType.STOCK, name,3,valueInformation.results[0].symbol);
    console.log(financial);
    const mysql = new FinancialRepository();
    console.log(mysql.getFinancialAssetByTicker(valueInformation.results[0].symbol))

    controller.save(financial)
  
}

 main()
