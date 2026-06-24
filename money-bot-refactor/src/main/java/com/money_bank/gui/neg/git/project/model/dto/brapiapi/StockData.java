package com.money_bank.gui.neg.git.project.model.dto.brapiapi;

import java.math.BigDecimal;

public record StockData(
        String shortName,
        String longName,
        String currency,

        BigDecimal regularMarketPrice,
        BigDecimal regularMarketDayHigh,
        BigDecimal regularMarketDayLow,

        String regularMarketDayRange,

        BigDecimal regularMarketChange,
        BigDecimal regularMarketChangePercent,

        String regularMarketTime,

        BigDecimal marketCap,

        Long regularMarketVolume,

        BigDecimal regularMarketPreviousClose,
        BigDecimal regularMarketOpen,

        String fiftyTwoWeekRange,

        BigDecimal fiftyTwoWeekLow,
        BigDecimal fiftyTwoWeekHigh,

        String logourl
) {
}