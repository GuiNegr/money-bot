package com.money_bank.gui.neg.git.project.service.apis;


public interface ApiFinancialInterface<T> {

    String getApiClass();

    T search(String investimento);
}
