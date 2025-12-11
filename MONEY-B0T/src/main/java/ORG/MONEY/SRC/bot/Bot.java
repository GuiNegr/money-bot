package ORG.MONEY.SRC.bot;


import ORG.MONEY.SRC.models.Stock;
import ORG.MONEY.SRC.models.TelegramUser;
import ORG.MONEY.SRC.utils.impl.TokenProvider;
import ORG.MONEY.SRC.view.impl.ViewMaster;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.util.ArrayList;
import java.util.List;

public class Bot extends TelegramLongPollingBot {

    
    public static List<TelegramUser> usersList = new ArrayList<>();
    public static List<Stock> stockListOnRunning = new ArrayList<>();

    @Override
    public String getBotUsername() {
        return "test";
    }

    @Override
    public String getBotToken() {
        return TokenProvider.getTokenTelegram();
    }

    @Override
    public void onRegister() {
        super.onRegister();
    }

    @Override
    public void onUpdateReceived(Update update) {

    }

    @Override
    public void onUpdatesReceived(List<Update> updates) {
        super.onUpdatesReceived(updates);
        TelegramUser tempUser = new TelegramUser(updates.get(0).getMessage().getText(), updates.get(0).getMessage().getChatId());
        if(!usersList.contains(tempUser)) {
            usersList.add(tempUser);
        }
        tempUser.setStepInto(Bot.usersList.get(Bot.usersList.indexOf(tempUser)).getStepInto());
        sendMessage(tempUser.getChatId(), ViewMaster.orquestrator(tempUser));
    }


    public void sendMessage(Long who, String what){
        SendMessage sm = SendMessage.builder()
                .chatId(who.toString())
                .text(what).build();
        try {
            execute(sm);
        } catch (TelegramApiException e) {
            throw new RuntimeException(e);
        }
    }

}
