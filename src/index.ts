import { FinancialController } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/controller/FinancialController';
import { FinancialType } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/model/enums/FinancialType';
import { FinancialAsset } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/model/FinancialAsset';
import { FinancialRepository } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/repository/FinancialRepository';
import { PolygonApiService } from './service/polygonApi/PolygonApiService';


async function main() {

    

    const polygon = new PolygonApiService();
    polygon.getStockInformation("AAPL")
  
}

 main()
