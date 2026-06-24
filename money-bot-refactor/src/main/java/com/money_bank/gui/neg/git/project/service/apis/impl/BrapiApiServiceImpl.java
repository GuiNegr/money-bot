package com.money_bank.gui.neg.git.project.service.apis.impl;

import com.money_bank.gui.neg.git.project.model.dto.brapiapi.BrapiApiResponse;
import com.money_bank.gui.neg.git.project.service.apis.ApiFinancialInterface;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
@Slf4j
public class BrapiApiServiceImpl implements ApiFinancialInterface<BrapiApiResponse> {

    private RestClient restClient;

    public BrapiApiServiceImpl(){
        restClient = RestClient.builder().build();
    }


    @Value("${spring.apis.brapiApi.url}")
    private String brapiUrl;

    @Value("${spring.apis.brapiApi.token}")
    private String token;


    @Override
    public String getApiClass() {
        return "BRAPI";
    }

    @Override
    public BrapiApiResponse search(String acoes) {
        String searchUrl = brapiUrl+"v2/stocks/quote?symbols="+acoes;
        BrapiApiServiceImpl.log.debug("URL GERADA: "+searchUrl);
        try{
            return restClient.get().uri(searchUrl).header("Authorization",token).retrieve().body(BrapiApiResponse.class);
        }catch (Exception e){
            BrapiApiServiceImpl.log.error("Erro na busca da acao verifique oque foi enviado!: "+e.getMessage());
            return new BrapiApiResponse();
        }

    }
}
