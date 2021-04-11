import { stringify } from '@angular/compiler/src/util';
import { io } from 'socket.io-client';

export class SocketIOService {
    private url = 'http://localhost:5000';
    public socket;
    private messages: String[];
    private databaseData: any[];

    constructor() {
        this.socket = io(this.url);
        this.messages = [""];
        this.databaseData = [];

        this.socket.on('data', (data) => {
            this.messages.push(data);
        })

        this.socket.emit('receive');
        this.socket.on('receive', (data) => {
            this.databaseData = data;
        })
    }

    public sendRequest(request: String) : void{
        this.socket.emit('execute', request);

        if (request == "start") {
            this.messages = [""];
            this.messages.push("");
        }
    }

    public getDatabaseData() : any[] {
        this.socket.emit('receive');
        return this.databaseData;
    }

    public getMessages(): String[] {
        return this.messages;
    }
}

