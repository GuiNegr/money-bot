package com.money_bank.gui.neg.git.project.model.dto.brapiapi;

import java.util.List;

public record BrapiApiResponse(
        List<Result> results,
        String requestedAt,
        Integer took
) {
    public BrapiApiResponse() {
        this(List.of(), null, null);
    }
}