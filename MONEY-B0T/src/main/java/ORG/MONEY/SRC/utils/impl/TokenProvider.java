package ORG.MONEY.SRC.utils.impl;

import ORG.MONEY.SRC.Main;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class TokenProvider {


    public static String getTokenTelegram(){
        Properties prop = new Properties();
        String tokenTelergam = "";
        try (InputStream input = Main.class.getResourceAsStream("/config.properties")) {
            prop.load(input);
            tokenTelergam = prop.getProperty("APIKEY_TELEGRA");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return tokenTelergam;
    }
}
