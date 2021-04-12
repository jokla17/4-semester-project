import { stringify } from '@angular/compiler/src/util';
import { io } from 'socket.io-client';
import {Observable} from 'rxjs';

export class SocketIOService {
    private url = 'http://localhost:5000';
    public socket;

    constructor() {
        this.socket = io(this.url);
    }

    // OPC UA
    public emitToOPCUA(request: String) : void {
        this.socket.emit('execute', request);
    }

    public listenToOPCUA () : any{
        return Observable.create((observer) => { 
            this.socket.on('receive', (data) => {
                this.socket.on('data', (data) => {
                    observer.next(data);
                })
            })  
        });
    }
    
    // Database
    public emitToDatabase() : void {
        this.socket.emit('receive');
    }

    public listenToDatabase () : any{
        return Observable.create((observer) => {
            this.socket.on('receive', (data) => {
                observer.next(new Map(data.map( callback => [callback.BatchId, callback] ))); // [key,value]
            })  
        });
    }
}

