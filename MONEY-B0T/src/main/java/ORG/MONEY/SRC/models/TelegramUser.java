package ORG.MONEY.SRC.models;



import java.util.Objects;

public class TelegramUser {
    
    private Long chatId;
    private String lastMessage;
    private int stepInto;

    public TelegramUser(String lastMessage, Long chatId) {
        this.lastMessage = lastMessage;
        this.chatId = chatId;
    }

    public Long getChatId() {
        return chatId;
    }

    public String getLastMessage() {
        return lastMessage;
    }

    public int getStepInto(){
        return this.stepInto;
    }

    public void setStepInto(int newStep){this.stepInto = newStep;}

    public void setLastMessage(String newMessage){this.lastMessage = newMessage;}

    public void setChatId(Long chatId) {
        this.chatId = chatId;
    }


    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        TelegramUser telegramUser = (TelegramUser) o;
        return Objects.equals(chatId, telegramUser.chatId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(chatId, lastMessage);
    }
}
