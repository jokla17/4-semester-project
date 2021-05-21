package core.presentation;

import core.domain.SocketClient;

public class Client {
    public static void main(String[] args){
        SocketClient socketClient = new SocketClient();
        socketClient.establishConnection();
    }
}
 