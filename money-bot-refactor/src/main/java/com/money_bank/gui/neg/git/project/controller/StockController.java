package com.money_bank.gui.neg.git.project.controller;


import com.money_bank.gui.neg.git.project.model.dto.brapiapi.BrapiApiResponse;
import com.money_bank.gui.neg.git.project.service.ServiceFinancial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/FinancialAsset")
public class StockController {

    @Autowired
    private ServiceFinancial serviceFinancialImpl;


    @GetMapping("/searchStocks/{stock}")
    public ResponseEntity<BrapiApiResponse> searchStock(@PathVariable String stock) {

        BrapiApiResponse response =
                serviceFinancialImpl.serviceCadastrarAcoes(stock,"BRAPI");

        if (response == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/searcCripto/{cripto}")
    public ResponseEntity<HttpStatus> searchCripto(@PathVariable String cripto) {

        System.out.println(serviceFinancialImpl.serviceCadastrarCripto(cripto));
        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }

}
