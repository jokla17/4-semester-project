import { io } from 'socket.io-client'; 
import { Observable } from 'rxjs';

export class SocketIOService {
    private url = 'http://localhost:5000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public emit(event : String, request : any) : void {
        this.socket.emit(event, request); 
    }

    public listen(event : String) : any {
        return new Observable((subscriber) => {
            this.socket.on(event, (data) => {
                subscriber.next(data);
            })
        });
    }
}

