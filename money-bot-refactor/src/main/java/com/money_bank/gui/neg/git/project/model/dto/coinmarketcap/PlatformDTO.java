package com.money_bank.gui.neg.git.project.model.dto.coinmarketcap;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class PlatformDTO {

    private Long id;
    private String slug;
    private String name;
    private String symbol;
    private String tokenAddress;
}