package com.money_bank.gui.neg.git.project.model.dto.coinmarketcap;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.List;

@Data
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class CryptoDTO {

    private Long id;
    private String name;
    private String symbol;
    private String slug;

    private PlatformDTO platform;

    private List<QuoteDTO> quote;

    private List<TagDTO> tags;

    private Integer isActive;
    private Boolean infiniteSupply;
    private Integer isMarketCapIncludedInCalc;
    private Integer isFiat;

    private BigDecimal circulatingSupply;
    private BigDecimal totalSupply;
    private BigDecimal maxSupply;

    private String dateAdded;

    private Integer numMarketPairs;
    private Integer cmcRank;

    private String lastUpdated;

    private BigDecimal tvlRatio;
    private BigDecimal selfReportedCirculatingSupply;
    private BigDecimal selfReportedMarketCap;
    private BigDecimal unlockedCirculatingSupply;
    private BigDecimal unlockedMarketCap;
}