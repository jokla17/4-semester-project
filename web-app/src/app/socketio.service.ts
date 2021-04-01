import { io } from 'socket.io-client'; 

export class SocketIOService {
    private url = 'http://localhost:5000';
    private socket;
    private messages: String[];

    constructor() {
        this.socket = io(this.url);
        this.messages = [];

        this.socket.on('data', (data) => {
            this.messages.push(data);
        })
    }

    public sendRequest(request: String) {
        this.socket.emit('execute', request);
    }

    public getMessages(): String[] {
        return this.messages;
    }
}