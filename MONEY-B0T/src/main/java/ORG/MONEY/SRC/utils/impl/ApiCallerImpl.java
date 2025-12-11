package ORG.MONEY.SRC.utils.impl;

import ORG.MONEY.SRC.utils.ApiCaller;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class ApiCallerImpl implements ApiCaller {

    public static final String URL = "http://localhost:3000/";
    private static final HttpClient httpClient = HttpClient.newHttpClient();



    public static String[] getAllInfoAboutYourWallet(String ticker) {
        try {
            HttpRequest request = HttpRequest.newBuilder().GET().timeout(Duration.ofSeconds(10)).uri(URI.create(URL+"getYoutWalletTicker/"+ticker)).build();
            HttpResponse<String> response = httpClient.send(request,HttpResponse.BodyHandlers.ofString());
            String[] split = response.body().split(",");

            return split;
        }catch (Exception e){
            System.out.println("Error in getting info about your wallet: "+e.getMessage());
        }
        return new String[0];
    }

    public static String[] searchStock(String ticker){
        try{
            HttpRequest request = HttpRequest.newBuilder().GET().timeout(Duration.ofSeconds(30)).uri(URI.create(URL+"getStockValue/"+ticker)).build();
            HttpResponse<String> response = httpClient.send(request,HttpResponse.BodyHandlers.ofString());
            if(!response.body().isEmpty()){
                return response.body().split(",");
            }
            return new String[0];
        }catch (Exception e){
            System.out.println("Error in searchStock"+e.getMessage());
        }
        return new String[0];
    }
}
