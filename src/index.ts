import { FinancialController } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/controller/FinancialController';
import { FinancialType } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/model/enums/FinancialType';
import { FinancialAsset } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/model/FinancialAsset';
import { FinancialRepository } from '/home/chickenlinuxuser/Documentos/Estudos/money-bankJS/src/repository/FinancialRepository';
import { PolygonApiService } from './service/polygonApi/PolygonApiService';
import { CoinMarketCapService } from './service/coinMarketCapService/CoinMarketCapService';


async function main() {
    


    const gekko:CoinMarketCapService = new CoinMarketCapService()

    gekko.getCryptoInformation("BTC")
  
}

 main()
