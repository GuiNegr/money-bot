package ORG.MONEY.SRC.user;


import java.util.Objects;

public class TelegramUser {
    private Long chatId;
    private String lastMessage;

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
