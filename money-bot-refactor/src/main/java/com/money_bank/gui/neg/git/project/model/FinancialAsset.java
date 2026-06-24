package com.money_bank.gui.neg.git.project.model;

import com.money_bank.gui.neg.git.project.model.enums.FinancialType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FinancialAsset {
    private String ticker;
    private BigDecimal amount;
    private FinancialType financialType;
    private String name;
    private double quantity;

}
