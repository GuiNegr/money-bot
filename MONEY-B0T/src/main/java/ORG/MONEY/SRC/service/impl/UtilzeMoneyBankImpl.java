package ORG.MONEY.SRC.service.impl;

import ORG.MONEY.SRC.service.UtilizeMoneyBank;

public class UtilzeMoneyBankImpl implements UtilizeMoneyBank{

    public static String processStringArrayResponse(String[] response){
        return response[2] + "\n" + response[3] + "\n" + response[5];
    };

}
