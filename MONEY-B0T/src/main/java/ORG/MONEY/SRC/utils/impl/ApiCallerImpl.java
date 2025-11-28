package ORG.MONEY.SRC.utils.impl;

import ORG.MONEY.SRC.utils.ApiCaller;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class ApiCallerImpl implements ApiCaller {

    public static final String URL = "http://localhost:3000/";


    public static void getAllTokens() {
        try {
            HttpClient httpClient = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder().GET().timeout(Duration.ofSeconds(10)).uri(URI.create(URL+"getYoutWalletTicker/PETR3")).build();
            HttpResponse<String> response = httpClient.send(request,HttpResponse.BodyHandlers.ofString());
            System.out.println(response.statusCode());
            System.out.println(response.body());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

    }
}
