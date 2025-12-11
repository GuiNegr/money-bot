package ORG.MONEY.SRC.view.impl;


import ORG.MONEY.SRC.bot.Bot;
import ORG.MONEY.SRC.service.impl.UtilzeMoneyBankImpl;
import ORG.MONEY.SRC.models.TelegramUser;
import ORG.MONEY.SRC.utils.impl.ApiCallerImpl;
import ORG.MONEY.SRC.view.ViewManager;

public class ViewMaster implements ViewManager {

    boolean on = true;
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
                else if(telegramUser.getLastMessage().contains("3")){
                    Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(-6);
                    return askingForTheStock();
                }
                else if (telegramUser.isReadyToGo()){
                    return getWalletInformation(telegramUser);
                }
            }
            case -3 ->{
                Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(0);
                return understadingMessage(telegramUser);
            }
            case -6 -> {
                Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(0);
                return getWalletInformation(telegramUser);
            }

        }
        return "Não entendi";
    }



    public static String WelcomeMessage(){
        return "Hello! vocês está utilizando o MoneyBot! seja bem vindo! em que podemos ajudar você hoje? \n 1 -> QUERO VER UMA AÇÃO ESPECIFICA  \n 2 -> QUERO VER MINHAS AÇÕES \n 3 -> QUERO SALVAR UM NOVO INVESTIMENTO";
    }

    public static String askingForTheStock(){
        return "Harooo! Informe por favor o nome da ação! \n R:";
    }

    public static String userStockNotFound(){
        return "Essa ação não foi encontrada tente novamente";
    }

    public static String askingForTheQuantityStock(){
        return "Olá! qual a quantidade?";
    }


    private static String understadingMessage(TelegramUser telegramUser){
        return UtilzeMoneyBankImpl.processStringArrayResponse(ApiCallerImpl.getAllInfoAboutYourWallet(telegramUser.getLastMessage()));
    }

    private static String getWalletInformation(TelegramUser telegramUser){
        String [] resp = ApiCallerImpl.searchStock(telegramUser.getLastMessage().strip().replaceAll("\\s+", ""));
        Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setReadyToGo();
        if(resp.length < 1){
            Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setStepInto(-1);
            return "Ação não econtrada! Por favor tente novamente!";
        }
        Bot.usersList.get(Bot.usersList.indexOf(telegramUser)).setReadyToGo();
        return UtilzeMoneyBankImpl.processStringArrayResponse(resp);

    }

    private static String messageAskingTicketName(){
        return "Pode me informar o nome do ticket?";
    }

}
