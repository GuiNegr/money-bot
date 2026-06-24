package com.money_bank.gui.neg.git.project.model.dto.coinmarketcap;

import lombok.Getter;

import java.util.List;
import java.util.Map;

@Getter
public class CoinMarketCapResponseDTO {
    private Map<String,Object> status;
    private List<CryptoDTO> data;
}