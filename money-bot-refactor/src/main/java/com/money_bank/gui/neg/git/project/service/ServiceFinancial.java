package com.money_bank.gui.neg.git.project.service;


import com.money_bank.gui.neg.git.project.model.dto.brapiapi.BrapiApiResponse;

public interface ServiceFinancial {

    BrapiApiResponse serviceCadastrarAcoes(String acoes,String provider);

    String serviceCadastrarCripto(String cripto );

    private String tratamentoDeString(String stringSemFormatacao) {
        return null;
    }
}
