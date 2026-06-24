package com.money_bank.gui.neg.git.project.service.apis.impl;

import com.money_bank.gui.neg.git.project.model.dto.coinmarketcap.CoinMarketCapResponseDTO;
import com.money_bank.gui.neg.git.project.model.dto.coinmarketcap.CryptoDTO;
import com.money_bank.gui.neg.git.project.service.apis.ApiFinancialInterface;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;


@Service
@Slf4j
public class CoinMarketCapFinanciaiImpl implements ApiFinancialInterface<CryptoDTO> {

    private RestClient restClient;

    public CoinMarketCapFinanciaiImpl(){
        restClient = RestClient.builder().build();
    }


    @Value("${spring.apis.coinmarketcap.url}")
    private String coinMarketCapUrl;

    @Value("${spring.apis.coinmarketcap.token}")
    private String token;


    @Override
    public String getApiClass() {
        return "COINMARKETCAP";
    }

    @Override
    public CryptoDTO search(String investimento) {
        String searchUrl = coinMarketCapUrl+"cryptocurrency/quotes/latest?symbol="+investimento;

        try{
            CoinMarketCapResponseDTO coin = restClient.get().uri(searchUrl).header("X-CMC_PRO_API_KEY",token).retrieve().body(CoinMarketCapResponseDTO.class);

            return coin.getData().getFirst();

        }catch (Exception e){
            CoinMarketCapFinanciaiImpl.log.error("Erro na busca da cripto, por favor realise novamente: "+e.getMessage());
            return new CryptoDTO();
        }
    }
}
