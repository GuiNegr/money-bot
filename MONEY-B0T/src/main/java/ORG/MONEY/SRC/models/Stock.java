package ORG.MONEY.SRC.models;

public class Stock {
    private String name;
    private int quantity;
    private TelegramUser owner;


    public Stock(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public TelegramUser getOwner() {
        return owner;
    }

    public void setOwner(TelegramUser owner) {
        this.owner = owner;
    }
}
