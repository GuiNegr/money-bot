package ORG.MONEY.SRC.view.impl;


import ORG.MONEY.SRC.bot.Bot;
import ORG.MONEY.SRC.service.impl.UtilzeMoneyBankImpl;
import ORG.MONEY.SRC.models.TelegramUser;
import ORG.MONEY.SRC.utils.impl.ApiCallerImpl;
import ORG.MONEY.SRC.view.ViewManager;

public class ViewMaster implements ViewManager {

    private ViewMaster(){
        //Para evitar instanciamento da classe
    }


    public static String orquestrator(TelegramUser telegramUser) {
        if (telegramUser.getStepInto() == 0) {
            Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(-1);
            return WelcomeMessage();
        }

        switch (telegramUser.getStepInto()){
            case -1 ->{
                if(telegramUser.getLastMessage().contains("1")){
                    Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(-3);
                    return messageAskingTicketName();
                }
            }
            case -3 ->{
                Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(0);
                return understadingMessage(telegramUser);
            }
        }
        return "Não entendi";
    }



    public static String WelcomeMessage(){
        return "Hello! vocês está utilizando o MoneyBot! seja bem vindo! em que podemos ajudar você hoje? \n 1 -> QUERO VER UMA AÇÃO ESPECIFICA  \n 2 -> QUERO VER MINHAS AÇÕES \n 3 -> QUERO SALVAR UM NOVO INVESTIMENTO";
    }


    private static String understadingMessage(TelegramUser telegramUser){
        return UtilzeMoneyBankImpl.processStringArrayResponse(ApiCallerImpl.getAllTokens(telegramUser.getLastMessage()));
    }

    private static String messageAskingTicketName(){
        return "Pode me informar o nome do ticket?";
    }

}
