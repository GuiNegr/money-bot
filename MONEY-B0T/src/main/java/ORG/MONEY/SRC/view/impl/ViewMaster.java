package ORG.MONEY.SRC.view.impl;


import ORG.MONEY.SRC.bot.Bot;
import ORG.MONEY.SRC.user.TelegramUser;
import ORG.MONEY.SRC.utils.ApiCaller;
import ORG.MONEY.SRC.utils.impl.ApiCallerImpl;
import ORG.MONEY.SRC.view.ViewManager;

public class ViewMaster implements ViewManager {

    private ViewMaster(){
        //Para evitar instanciamento da classe
    }


    public static String orquestrator(TelegramUser telegramUser) {

        return switch (telegramUser.getStepInto()) {
            case 0 -> welcomeMessage(telegramUser);
            case 1 -> understadingMessage(telegramUser);
            default -> "Não entendi a memsagem! poderia repetir?";
        };


    }


    private static  String welcomeMessage(TelegramUser telegramUser){
        Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(1);
        ApiCallerImpl.getAllTokens();
        return "Hello! vocês está utilizando o MoneyBot! seja bem vindo! em que podemos ajudar você hoje? \n 1 -> QUERO VER MINHAS AÇÕES \n 2 -> QUERO VER UMA AÇÃO ESPECIFICA \n 3 -> QUERO SALVAR UM NOVO INVESTIMENTO";
    }

    private static String understadingMessage(TelegramUser telegramUser){
        Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(2);
        return "Entendo! irei já enviar oque temos disp";
    }
}
