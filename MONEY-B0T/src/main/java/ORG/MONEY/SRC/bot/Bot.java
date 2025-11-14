package ORG.MONEY.SRC.bot;


import ORG.MONEY.SRC.user.TelegramUser;
import ORG.MONEY.SRC.utils.TokenProvider;
import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

import java.util.ArrayList;
import java.util.List;

public class Bot extends TelegramLongPollingBot {

    List<TelegramUser> usersList = new ArrayList<>();

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

        if(!this.usersList.isEmpty() && this.usersList.contains(tempUser)){
            sendMessage(updates.get(0).getMessage().getChatId(),"VOCE JÁ ESTÁ AQUI");
        }else{
            usersList.add(tempUser);
            sendMessage(updates.get(0).getMessage().getChatId(),"eu tenho escoliose");
        }
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
