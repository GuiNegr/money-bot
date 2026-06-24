package com.money_bank.gui.neg.git.project.service.imp;

import com.money_bank.gui.neg.git.project.model.dto.brapiapi.BrapiApiResponse;
import com.money_bank.gui.neg.git.project.model.dto.coinmarketcap.CryptoDTO;
import com.money_bank.gui.neg.git.project.repository.FInancialAssetRepository;
import com.money_bank.gui.neg.git.project.service.ServiceFinancial;
import com.money_bank.gui.neg.git.project.service.apis.ApiFinancialInterface;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;


@Service
@Slf4j
public class ServiceFinancialImpl implements ServiceFinancial {


    private FInancialAssetRepository fInancialAssetRepository;

    private final Map<String, ApiFinancialInterface> providers;


    public ServiceFinancialImpl(List<ApiFinancialInterface> apis) {
        this.providers = apis.stream()
                .collect(Collectors.toMap(
                        ApiFinancialInterface::getApiClass,
                        Function.identity()
                ));
    }


    @Override
    public BrapiApiResponse serviceCadastrarAcoes(String investimento,String provider) {
        ServiceFinancialImpl.log.debug("tentando fazer a busca pela ação: "+investimento);

        BrapiApiResponse brapiApiResponse = (BrapiApiResponse) providers.get(provider).search(tratamentoDeString(investimento));

       if(brapiApiResponse.results().isEmpty()){
            ServiceFinancialImpl.log.error("Stock Not Found!");
            return new BrapiApiResponse();
       }

       return brapiApiResponse;
    }

    @Override
    public String serviceCadastrarCripto(String cripto) {

        CryptoDTO crito = (CryptoDTO) providers.get("COINMARKETCAP").search(tratamentoDeString(cripto));
        System.out.println(crito.toString());

         return "";
    }


    private String tratamentoDeString(String stringSemFormatacao){
        return stringSemFormatacao.toUpperCase(Locale.ROOT).replace(";","").trim();
    }
}
