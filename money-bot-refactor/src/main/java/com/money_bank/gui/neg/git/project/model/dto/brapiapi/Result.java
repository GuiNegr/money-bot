package com.money_bank.gui.neg.git.project.model.dto.brapiapi;

public record Result(
        String requestedSymbol,
        String symbol,
        Boolean changed,
        StockData data
) {
}