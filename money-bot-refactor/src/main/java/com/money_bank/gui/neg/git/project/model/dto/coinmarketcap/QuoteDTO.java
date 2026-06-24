package com.money_bank.gui.neg.git.project.model.dto.coinmarketcap;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.math.BigDecimal;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class QuoteDTO {

    private Long id;
    private String symbol;

    private BigDecimal price;

    private BigDecimal volume24h;
    private BigDecimal cexVolume24h;
    private BigDecimal dexVolume24h;
    private BigDecimal volume24hReported;

    private BigDecimal volume7d;
    private BigDecimal volume7dReported;

    private BigDecimal volume30d;
    private BigDecimal volume30dReported;

    private BigDecimal volumeChange24h;

    private BigDecimal percentChange1h;
    private BigDecimal percentChange24h;
    private BigDecimal percentChange7d;
    private BigDecimal percentChange30d;
    private BigDecimal percentChange60d;
    private BigDecimal percentChange90d;

    private BigDecimal marketCap;
    private BigDecimal marketCapDominance;
    private BigDecimal fullyDilutedMarketCap;
    private BigDecimal mintedMarketCap;

    private BigDecimal tvl;
    private BigDecimal marketCapByTotalSupply;

    private String lastUpdated;
}